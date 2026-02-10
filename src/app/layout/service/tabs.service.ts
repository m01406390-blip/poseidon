import { Injectable, computed, inject, signal } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface AppTab {
    url: string;
    title: string;
    closable: boolean;
}

const STORAGE_KEY = 'poseidon.tabs.v1';

@Injectable({ providedIn: 'root' })
export class TabsService {
    private readonly router = inject(Router);

    readonly tabs = signal<AppTab[]>([]);
    readonly activeUrl = signal<string>('/');

    readonly activeTab = computed(() => this.tabs().find((t) => t.url === this.activeUrl()) ?? null);

    constructor() {
        this.restore();

        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
            const nav = e as NavigationEnd;
            const url = this.normalizeUrl(nav.urlAfterRedirects || nav.url);

            this.activeUrl.set(url);

            if (!this.shouldTrack(url)) {
                return;
            }

            const title = this.resolveTitleFromSnapshot(this.router.routerState.snapshot.root) ?? this.fallbackTitle(url);
            const closable = url !== '/';
            this.openOrActivate({ url, title, closable });
        });

        // Ensure current route is reflected (covers first load where NavigationEnd already happened)
        const initialUrl = this.normalizeUrl(this.router.url);
        this.activeUrl.set(initialUrl);
        if (this.shouldTrack(initialUrl)) {
            const title = this.resolveTitleFromSnapshot(this.router.routerState.snapshot.root) ?? this.fallbackTitle(initialUrl);
            this.openOrActivate({ url: initialUrl, title, closable: initialUrl !== '/' });
        }
    }

    openOrActivate(tab: AppTab) {
        const tabs = this.tabs();
        const existingIndex = tabs.findIndex((t) => t.url === tab.url);

        if (existingIndex >= 0) {
            const existing = tabs[existingIndex];
            const next = tabs.slice();
            next[existingIndex] = {
                ...existing,
                title: tab.title || existing.title,
                closable: tab.url === '/' ? false : existing.closable
            };
            this.tabs.set(next);
        } else {
            this.tabs.set([...tabs, tab]);
        }

        this.activeUrl.set(tab.url);
        this.persist();
    }

    close(url: string) {
        const normalized = this.normalizeUrl(url);
        const tabs = this.tabs();
        const index = tabs.findIndex((t) => t.url === normalized);
        if (index < 0) return;

        const closingActive = this.activeUrl() === normalized;

        const nextTabs = tabs.filter((t) => t.url !== normalized);
        this.tabs.set(nextTabs);

        if (closingActive) {
            const fallback = nextTabs[index - 1] ?? nextTabs[nextTabs.length - 1] ?? null;
            const nextUrl = fallback?.url ?? '/';
            this.activeUrl.set(nextUrl);
            if (this.shouldTrack(nextUrl)) {
                this.router.navigateByUrl(nextUrl);
            }
        }

        this.persist();
    }

    activate(url: string) {
        const normalized = this.normalizeUrl(url);
        this.activeUrl.set(normalized);
        this.router.navigateByUrl(normalized);
    }

    private shouldTrack(url: string) {
        if (!url || url === '/notfound') return false;
        if (url.startsWith('/landing')) return false;
        if (url.startsWith('/auth')) return false;
        return true;
    }

    private normalizeUrl(url: string) {
        const noHash = url.split('#')[0];
        const noQuery = noHash.split('?')[0];
        return noQuery === '' ? '/' : noQuery;
    }

    private resolveTitleFromSnapshot(snapshot: ActivatedRouteSnapshot): string | null {
        // Prefer the deepest route with breadcrumb, otherwise the deepest route.
        let node: ActivatedRouteSnapshot | null = snapshot;
        let deepest: ActivatedRouteSnapshot | null = snapshot;
        let lastBreadcrumb: string | null = null;

        while (node) {
            deepest = node;
            const crumb = (node.data?.['breadcrumb'] as string | undefined) ?? null;
            if (crumb) lastBreadcrumb = crumb;
            node = node.firstChild ?? null;
        }

        return lastBreadcrumb ?? ((deepest?.data?.['breadcrumb'] as string | undefined) ?? null);
    }

    private fallbackTitle(url: string) {
        if (url === '/') return 'Home';
        const parts = url.split('/').filter(Boolean);
        const last = parts[parts.length - 1] ?? 'Page';
        // simple humanize
        return last
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());
    }

    private restore() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw) as { tabs?: AppTab[]; activeUrl?: string };
            if (Array.isArray(parsed.tabs)) {
                // Always keep Home present
                const home: AppTab = { url: '/', title: 'Home', closable: false };
                const restored = parsed.tabs
                    .map((t) => ({ url: this.normalizeUrl(t.url), title: t.title, closable: t.url !== '/' && !!t.closable }))
                    .filter((t) => this.shouldTrack(t.url));

                const dedup = new Map<string, AppTab>();
                dedup.set(home.url, home);
                for (const t of restored) {
                    dedup.set(t.url, t.url === '/' ? home : t);
                }
                this.tabs.set(Array.from(dedup.values()));
            }

            if (parsed.activeUrl) {
                this.activeUrl.set(this.normalizeUrl(parsed.activeUrl));
            }
        } catch {
            // ignore
        }
    }

    private persist() {
        try {
            const payload = {
                tabs: this.tabs(),
                activeUrl: this.activeUrl()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch {
            // ignore
        }
    }
}
