import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';
import { AppMenuService } from '@/layout/service/app-menu.service';

@Component({
    selector: '[app-menu]',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
        <ul class="layout-menu">
            <ng-container *ngFor="let item of model(); let i = index">
                <li app-menuitem [item]="item" [index]="i" [root]="true" [parentKey]="'mix'"></li>
            </ng-container>
        </ul>
    `
})
export class AppMenu {
    private readonly menuService = inject(AppMenuService);

    // Synthetic root so existing sidebar styles apply (anchors are styled inside nested <ul>)
    readonly model = computed(() => {
        const root = this.menuService.activeRoot();
        if (!root) return [];

        return [
            {
                label: root.label,
                icon: root.icon,
                items: root.items ?? []
            }
        ];
    });
}
