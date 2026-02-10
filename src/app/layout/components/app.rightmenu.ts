import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { DividerModule } from 'primeng/divider';
import { LayoutService } from '@/layout/service/layout.service';
import { ButtonModule } from 'primeng/button';

type RightMenuNav = 'add' | 'actions' | 'visual' | 'code' | 'other' | 'list';

type ShortcutItem = {
    label: string;
    icon: string;
};

type NavItem = {
    id: RightMenuNav;
    icon: string;
    ariaLabel: string;
};

type CollapsibleSection = {
    title: string;
    expanded: boolean;
    items: ShortcutItem[];
};

@Component({
    selector: '[app-rightmenu]',
    standalone: true,
    imports: [CommonModule, DrawerModule, DividerModule, ButtonModule],
    template: `
        <p-drawer
            header=""
            [(visible)]="rightMenuVisible"
            position="right"
            styleClass="layout-rightmenu w-full! sm:w-xl!"
            (onShow)="onDrawerShow()"
        >
            <div class="h-full flex flex-col bg-surface-0">
                <!-- Dark header (search + actions) -->
                <div class="bg-surface-900 text-surface-0 flex items-center gap-3 px-3 py-2">
                    <div class="flex-1 min-w-0 flex items-center gap-2 px-2 py-1 rounded bg-white/10">
                        <i class="pi pi-search text-surface-0/90"></i>
                        <input
                            type="text"
                            placeholder="Search DSS..."
                            class="w-full min-w-0 bg-transparent outline-none border-0 text-surface-0 placeholder:text-surface-0/80 text-sm"
                        />
                    </div>

                    <div class="flex items-center gap-1">
                        <button type="button" aria-label="Grid" class="h-8 w-8 rounded hover:bg-white/10 flex items-center justify-center">
                            <i class="pi pi-th-large"></i>
                        </button>
                        <button type="button" aria-label="Help" class="h-8 w-8 rounded hover:bg-white/10 flex items-center justify-center">
                            <i class="pi pi-question-circle"></i>
                        </button>
                        <button type="button" aria-label="Graph" class="h-8 w-8 rounded hover:bg-white/10 flex items-center justify-center">
                            <i class="pi pi-chart-line"></i>
                        </button>
                        <button type="button" aria-label="Profile" class="h-8 w-8 rounded hover:bg-white/10 flex items-center justify-center">
                            <i class="pi pi-user"></i>
                        </button>
                    </div>
                </div>

                <!-- Dataset title row -->
                <div class="flex items-center justify-between gap-3 px-3 py-2 border-b border-surface">
                    <div class="flex items-center gap-2 min-w-0">
                        <span class="h-8 w-8 rounded-sm bg-primary text-white flex items-center justify-center flex-none">
                            <i class="pi pi-database"></i>
                        </span>
                        <span class="font-semibold truncate">{{ title }}</span>
                    </div>
                    <button type="button" aria-label="Back" class="h-8 w-8 rounded hover:bg-surface-100 flex items-center justify-center">
                        <i class="pi pi-angle-left"></i>
                    </button>
                </div>

                <!-- ACTIONS content: left rail + scrollable section list -->
                <div class="flex-1 min-h-0 flex">
                    <!-- Rail -->
                    <div class="w-14 border-r border-surface bg-surface-0 flex flex-col items-center gap-3 py-2">
                        <button
                            type="button"
                            aria-label="Add"
                            (click)="activeNav = 'add'"
                            class="h-9 w-9 rounded-full flex items-center justify-center border-2 border-sky-200 text-sky-600 bg-surface-0"
                            [ngClass]="activeNav === 'add' ? 'border-sky-600 text-sky-700 ring-2 ring-sky-100' : 'hover:bg-surface-100'"
                        >
                            <i class="pi pi-plus"></i>
                        </button>

                        <button
                            *ngFor="let nav of navItems"
                            type="button"
                            [attr.aria-label]="nav.ariaLabel"
                            (click)="activeNav = nav.id"
                            class="h-9 w-9 rounded-full flex items-center justify-center border-2 border-sky-200 text-sky-600 bg-surface-0"
                            [ngClass]="activeNav === nav.id ? 'border-sky-600 text-sky-700 ring-2 ring-sky-100' : 'hover:bg-surface-100'"
                        >
                            <i class="pi" [ngClass]="nav.icon"></i>
                        </button>

                        <div class="flex-1"></div>

                        <button type="button" aria-label="Step 2" class="h-9 w-9 rounded-full flex items-center justify-center border-2 border-sky-200 text-sky-600">
                            <span class="font-bold">2</span>
                        </button>
                        <button
                            type="button"
                            aria-label="History"
                            class="h-9 w-9 rounded-full flex items-center justify-center border-2 border-sky-200 text-sky-600 hover:bg-surface-100"
                        >
                            <i class="pi pi-history"></i>
                        </button>
                    </div>

                    <!-- Scroll area -->
                    <div class="flex-1 min-w-0 overflow-auto p-3">
                        <!-- Add (+) tab -->
                        <div class="pb-3" *ngIf="activeNav === 'add'">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-left"
                                (click)="addExpanded = !addExpanded"
                                [attr.aria-expanded]="addExpanded"
                            >
                                <span class="font-bold text-base">Quick add</span>
                                <i class="pi" [ngClass]="addExpanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                            </button>

                            <div *ngIf="addExpanded" class="mt-3 grid grid-cols-6 max-[420px]:grid-cols-4 gap-x-3 gap-y-4">
                                <button type="button" class="flex flex-col items-center gap-1" *ngFor="let item of addShortcuts" (click)="onShortcutClick(item)">
                                    <span class="h-11 w-11 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                                        <i class="pi" [ngClass]="item.icon"></i>
                                    </span>
                                    <span class="text-xs text-center text-surface-700 dark:text-surface-0 leading-tight">{{ item.label }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Actions row -->
                        <div class="pb-3" *ngIf="activeNav === 'actions'">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-left"
                                (click)="actionsExpanded = !actionsExpanded"
                                [attr.aria-expanded]="actionsExpanded"
                            >
                                <span class="font-bold text-base">Actions</span>
                                <i class="pi" [ngClass]="actionsExpanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                            </button>

                            <div *ngIf="actionsExpanded" class="mt-3 grid grid-cols-6 max-[420px]:grid-cols-4 gap-x-3 gap-y-4">
                                <button type="button" class="flex flex-col items-center gap-1" *ngFor="let item of topShortcuts" (click)="onShortcutClick(item)">
                                    <span class="h-11 w-11 rounded-full bg-violet-600 text-white flex items-center justify-center">
                                        <i class="pi" [ngClass]="item.icon"></i>
                                    </span>
                                    <span class="text-xs text-center text-surface-700 dark:text-surface-0 leading-tight">{{ item.label }}</span>
                                </button>
                            </div>

                            <div class="flex justify-center pt-3">
                                <button pButton type="button" label="LAB" icon="pi pi-flask" severity="info"></button>
                            </div>
                        </div>

                        <!-- Visual recipes -->
                        <div class="border-t border-surface pt-3 mt-3" *ngIf="activeNav === 'visual'">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-left"
                                (click)="visualRecipes.expanded = !visualRecipes.expanded"
                                [attr.aria-expanded]="visualRecipes.expanded"
                            >
                                <span class="font-bold text-base">{{ visualRecipes.title }}</span>
                                <i class="pi" [ngClass]="visualRecipes.expanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                            </button>

                            <div *ngIf="visualRecipes.expanded" class="mt-3 grid grid-cols-6 max-[420px]:grid-cols-4 gap-x-3 gap-y-4">
                                <button type="button" class="flex flex-col items-center gap-1" *ngFor="let item of visualRecipes.items" (click)="onShortcutClick(item)">
                                    <span class="h-11 w-11 rounded-full bg-amber-400 text-white flex items-center justify-center">
                                        <i class="pi" [ngClass]="item.icon"></i>
                                    </span>
                                    <span class="text-xs text-center text-surface-700 dark:text-surface-0 leading-tight">{{ item.label }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Code recipes -->
                        <div class="border-t border-surface pt-3 mt-3" *ngIf="activeNav === 'code'">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-left"
                                (click)="codeRecipes.expanded = !codeRecipes.expanded"
                                [attr.aria-expanded]="codeRecipes.expanded"
                            >
                                <span class="font-bold text-base">{{ codeRecipes.title }}</span>
                                <i class="pi" [ngClass]="codeRecipes.expanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                            </button>

                            <div *ngIf="codeRecipes.expanded" class="mt-3 grid grid-cols-6 max-[420px]:grid-cols-4 gap-x-3 gap-y-4">
                                <button type="button" class="flex flex-col items-center gap-1" *ngFor="let item of codeRecipes.items" (click)="onShortcutClick(item)">
                                    <span class="h-11 w-11 rounded-full bg-orange-500 text-white flex items-center justify-center">
                                        <i class="pi" [ngClass]="item.icon"></i>
                                    </span>
                                    <span class="text-xs text-center text-surface-700 dark:text-surface-0 leading-tight">{{ item.label }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Other recipes -->
                        <div class="border-t border-surface pt-3 mt-3" *ngIf="activeNav === 'other'">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-left"
                                (click)="otherRecipes.expanded = !otherRecipes.expanded"
                                [attr.aria-expanded]="otherRecipes.expanded"
                            >
                                <span class="font-bold text-base">{{ otherRecipes.title }}</span>
                                <i class="pi" [ngClass]="otherRecipes.expanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                            </button>

                            <div *ngIf="otherRecipes.expanded" class="mt-3 grid grid-cols-6 max-[420px]:grid-cols-4 gap-x-3 gap-y-4">
                                <button type="button" class="flex flex-col items-center gap-1" *ngFor="let item of otherRecipes.items" (click)="onShortcutClick(item)">
                                    <span class="h-11 w-11 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                                        <i class="pi" [ngClass]="item.icon"></i>
                                    </span>
                                    <span class="text-xs text-center text-surface-700 dark:text-surface-0 leading-tight">{{ item.label }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Other actions -->
                        <div class="border-t border-surface pt-3 mt-3" *ngIf="activeNav === 'list'">
                            <button
                                type="button"
                                class="w-full flex items-center justify-between text-left"
                                (click)="otherActionsExpanded = !otherActionsExpanded"
                                [attr.aria-expanded]="otherActionsExpanded"
                            >
                                <span class="font-bold text-base">Other actions</span>
                                <i class="pi" [ngClass]="otherActionsExpanded ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
                            </button>

                            <div *ngIf="otherActionsExpanded" class="mt-3 flex flex-col gap-1">
                                <button
                                    type="button"
                                    class="w-full flex items-center gap-3 py-2 px-2 rounded text-left hover:bg-surface-100 dark:hover:bg-surface-800"
                                    *ngFor="let item of otherActions"
                                    (click)="onOtherActionClick(item)"
                                >
                                    <i class="pi pi-align-left text-surface-500"></i>
                                    <span class="text-sm text-surface-700 dark:text-surface-0">{{ item }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </p-drawer>
    `,
    styles: [
        `
            :host ::ng-deep .layout-rightmenu .p-drawer-header {
                display: none;
            }

            :host ::ng-deep .layout-rightmenu .p-drawer-content {
                padding: 0;
                overflow: hidden;
            }
        `
    ]
})
export class AppRightMenu {
    layoutService: LayoutService = inject(LayoutService);

    title = 'scored_set';

    navItems: NavItem[] = [
        { id: 'actions', icon: 'pi-bolt', ariaLabel: 'Actions' },
        { id: 'visual', icon: 'pi-info-circle', ariaLabel: 'Visual recipes' },
        { id: 'code', icon: 'pi-align-justify', ariaLabel: 'Code recipes' },
        { id: 'other', icon: 'pi-cloud', ariaLabel: 'Other recipes' },
        { id: 'list', icon: 'pi-angle-down', ariaLabel: 'Other actions' }
    ];

    // Default rail tab when the drawer opens.
    activeNav: RightMenuNav = 'add';

    addExpanded = true;
    actionsExpanded = true;

    addShortcuts: ShortcutItem[] = [
        { label: 'New', icon: 'pi-plus' },
        { label: 'Import', icon: 'pi-upload' },
        { label: 'Connect', icon: 'pi-link' },
        { label: 'Schema', icon: 'pi-sitemap' },
        { label: 'Notes', icon: 'pi-file-edit' },
        { label: 'Validate', icon: 'pi-verified' },
        { label: 'Preview', icon: 'pi-eye' },
        { label: 'Duplicate', icon: 'pi-copy' },
        { label: 'Move', icon: 'pi-directions' },
        { label: 'Share', icon: 'pi-share-alt' },
        { label: 'Pin', icon: 'pi-bookmark' },
        { label: 'Delete', icon: 'pi-trash' }
    ];

    topShortcuts: ShortcutItem[] = [
        { label: 'Explore', icon: 'pi-th-large' },
        { label: 'Build', icon: 'pi-play' },
        { label: 'Tag', icon: 'pi-tag' },
        { label: 'Export', icon: 'pi-download' },
        { label: 'Publish', icon: 'pi-upload' },
        { label: 'Share', icon: 'pi-share-alt' },
        { label: 'Run', icon: 'pi-bolt' },
        { label: 'Stop', icon: 'pi-stop' },
        { label: 'Refresh', icon: 'pi-refresh' },
        { label: 'Copy', icon: 'pi-copy' },
        { label: 'Settings', icon: 'pi-cog' },
        { label: 'Filter', icon: 'pi-filter' }
    ];

    visualRecipes: CollapsibleSection = {
        title: 'Visual recipes',
        expanded: true,
        items: [
            { label: 'Sync', icon: 'pi-refresh' },
            { label: 'Prepare', icon: 'pi-pencil' },
            { label: 'Sample/Filter', icon: 'pi-filter' },
            { label: 'Group', icon: 'pi-users' },
            { label: 'Distinct', icon: 'pi-percentage' },
            { label: 'Window', icon: 'pi-window-maximize' },
            { label: 'Join', icon: 'pi-link' },
            { label: 'Split', icon: 'pi-arrows-h' },
            { label: 'Top N', icon: 'pi-sort-amount-up' },
            { label: 'Sort', icon: 'pi-sort' },
            { label: 'Pivot', icon: 'pi-chart-bar' },
            { label: 'Stack', icon: 'pi-clone' }
        ]
    };

    codeRecipes: CollapsibleSection = {
        title: 'Code recipes',
        expanded: true,
        items: [
            { label: 'Python', icon: 'pi-code' },
            { label: 'R', icon: 'pi-chart-line' },
            { label: 'SQL', icon: 'pi-database' },
            { label: 'Shell', icon: 'pi-terminal' },
            { label: 'Spark SQL', icon: 'pi-bolt' },
            { label: 'Spark Scala', icon: 'pi-sparkles' },
            { label: 'PySpark', icon: 'pi-sitemap' },
            { label: 'Streaming', icon: 'pi-wifi' }
        ]
    };

    otherRecipes: CollapsibleSection = {
        title: 'Other recipes',
        expanded: true,
        items: [
            { label: 'Export', icon: 'pi-folder' },
            { label: 'Push', icon: 'pi-external-link' },
            { label: 'Predict', icon: 'pi-trophy' },
            { label: 'Cluster', icon: 'pi-circle' },
            { label: 'Evaluate', icon: 'pi-star' }
        ]
    };

    otherActionsExpanded = true;
    otherActions: string[] = [
        'Start schema propagation from here',
        'Add to a scenario',
        'Change connection',
        'Copy',
        'Update status (count of record, file size)',
        'Set auto count of records',
        'Allow build virtualization (for Spark pipelines)'
    ];

    get rightMenuVisible(): boolean {
        return this.layoutService.layoutState().rightMenuVisible;
    }

    set rightMenuVisible(_val: boolean) {
        this.layoutService.layoutState.update((prev) => ({ ...prev, rightMenuVisible: _val }));
    }

    onDrawerShow(): void {
        this.activeNav = 'add';
    }

    onShortcutClick(item: ShortcutItem): void {
        // Generic placeholder for wiring actions later.
        console.log('[RightMenu] shortcut clicked:', item.label);
    }

    onOtherActionClick(label: string): void {
        console.log('[RightMenu] other action clicked:', label);
    }
}
