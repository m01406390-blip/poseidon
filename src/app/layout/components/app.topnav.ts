import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMenuItem, AppMenuService } from '@/layout/service/app-menu.service';

@Component({
    selector: '[app-topnav]',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <nav class="hidden lg:flex items-center gap-1 ml-3 overflow-x-auto whitespace-nowrap app-hide-scrollbar">
            @for (item of rootItems(); track item.label) {
                <a
                    class="inline-flex items-center gap-2 px-3 py-2 rounded-full transition-colors cursor-pointer"
                    [ngClass]="{
                        'text-primary bg-primary-50 dark:bg-primary-950/40': isActive(item),
                        'text-surface-700 dark:text-surface-200 hover:bg-emphasis': !isActive(item)
                    }"
                    (click)="onRootClick(item)"
                    tabindex="0"
                >
                    <i *ngIf="item.icon" [ngClass]="item.icon"></i>
                    <span class="text-sm font-medium">{{ item.label }}</span>
                </a>
            }
        </nav>
    `
})
export class AppTopnav {
    private readonly menuService = inject(AppMenuService);

    readonly rootItems = computed(() => this.menuService.rootItems());

    isActive(item: AppMenuItem) {
        return !!item?.label && this.menuService.activeRootLabel() === item.label;
    }

    onRootClick(item: AppMenuItem) {
        this.menuService.selectRoot(item);
    }
}
