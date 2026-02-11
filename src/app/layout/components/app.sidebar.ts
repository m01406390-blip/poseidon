import { Component, computed, ElementRef, ViewChild, inject } from '@angular/core';
import { AppMenu } from './app.menu';
import { LayoutService } from '@/layout/service/layout.service';
import { AppFeaturesService } from '@/layout/service/app.features.service';
import { RouterModule } from '@angular/router';
import { AppTopbar } from '@/layout/components/app.topbar';
import { CommonModule } from '@angular/common';

@Component({
    selector: '[app-sidebar]',
    standalone: true,
    imports: [CommonModule, AppMenu, RouterModule, AppTopbar],
    template: ` <div class="layout-sidebar flex flex-col h-full" (mouseenter)="onMouseEnter()" (mouseleave)="onMouseLeave()">
        <div class="sidebar-header">
            <a class="logo" [routerLink]="['/']">
                <img class="logo-image h-16 w-auto" src="/images/is.png" alt="logo" />
                <span class="app-name text-6xl font-medium leading-normal">is</span></a
            >
            <button class="layout-sidebar-anchor z-2" type="button" (click)="anchor()"></button>
        </div>

        <div #menuContainer class="layout-menu-container flex-1 overflow-auto">
            <div app-menu></div>
        </div>

        <div class="sidebar-footer">
            <a tabindex="0" class="menu-button" (click)="onMenuButtonClick()">
                <i class="pi" [ngClass]="getMenuIcon()"></i>
            </a>
        </div>

        <div app-topbar *ngIf="isHorizontal() && !layoutService.isMobile()"></div>
    </div>`
})
export class AppSidebar {
    public features = inject(AppFeaturesService);
    timeout: any = null;

    isHorizontal = computed(() => this.layoutService.isHorizontal());

    isDarkTheme = computed(() => this.layoutService.isDarkTheme());

    @ViewChild('menuContainer') menuContainer!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public el: ElementRef
    ) {}

    getMenuIcon() {
        const inactive = this.layoutService.layoutState().staticMenuDesktopInactive;
        const isRTL = this.features.isRTL();

        if (isRTL) {
            return inactive ? 'pi-align-left' : 'pi-align-right';
        } else {
            return inactive ? 'pi-align-right' : 'pi-align-left';
        }
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onMouseEnter() {
        if (!this.layoutService.layoutState().anchored) {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }

            this.layoutService.layoutState.update((state) => {
                if (!state.sidebarActive) {
                    return {
                        ...state,
                        sidebarActive: true
                    };
                }
                return state;
            });
        }
    }

    onMouseLeave() {
        if (!this.layoutService.layoutState().anchored) {
            if (!this.timeout) {
                this.timeout = setTimeout(() => {
                    this.layoutService.layoutState.update((state) => {
                        if (state.sidebarActive) {
                            return {
                                ...state,
                                sidebarActive: false
                            };
                        }
                        return state;
                    });
                }, 300);
            }
        }
    }

    anchor() {
        this.layoutService.layoutState.update((state) => ({
            ...state,
            anchored: !state.anchored
        }));
    }
}
