import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TabsService } from '@/layout/service/tabs.service';

@Component({
    selector: '[app-tabsbar]',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule],
    template: `
        <div class="px-4 pt-2">
            <div class="flex items-center gap-2 overflow-x-auto whitespace-nowrap app-hide-scrollbar">
                @for (tab of tabs(); track tab.url) {
                    <a
                        class="inline-flex items-center gap-2 px-3 py-2 rounded-t-lg border border-surface bg-surface-0 dark:bg-surface-900 transition-colors"
                        [ngClass]="{
                            'text-primary border-b-0': isActive(tab.url),
                            'text-surface-700 dark:text-surface-200 hover:text-surface-950 dark:hover:text-surface-0': !isActive(tab.url)
                        }"
                        [routerLink]="tab.url"
                        (click)="$event.preventDefault(); tabsService.activate(tab.url)"
                        >
                        <span class="text-sm font-medium">{{ tab.title }}</span>
                        @if (tab.closable) {
                            <button
                                type="button"
                                class="w-7 h-7 inline-flex items-center justify-center rounded-md hover:bg-emphasis text-surface-600 dark:text-surface-300"
                                (click)="onClose(tab.url, $event)"
                                aria-label="Close"
                            >
                                <i class="pi pi-times text-xs"></i>
                            </button>
                        }
                    </a>
                }
            </div>
        </div>
    `
})
export class AppTabsbar {
    readonly tabsService = inject(TabsService);

    readonly tabs = computed(() => {
        const list = this.tabsService.tabs();
        // ensure Home is always first (without reordering other tabs)
        const home = list.find((t) => t.url === '/');
        const rest = list.filter((t) => t.url !== '/');
        return home ? [home, ...rest] : rest;
    });

    isActive(url: string) {
        return this.tabsService.activeUrl() === url;
    }

    onClose(url: string, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.tabsService.close(url);
    }
}
