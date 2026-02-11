import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AppMenuService } from '@/layout/service/app-menu.service';
import { APP_SHORTCUTS } from '@/layout/service/app.shortcuts';

@Component({
    selector: 'app-command-palette',
    standalone: true,
    imports: [CommonModule, DialogModule, InputTextModule],
    template: `
        <p-dialog 
            [(visible)]="visible" 
            [modal]="true" 
            [closable]="false" 
            [draggable]="false" 
            [resizable]="false"
            styleClass="command-palette-dialog"
            maskStyleClass="command-palette-mask"
        >
            <div class="p-3">
                <div class="flex items-center gap-3 border-b border-surface p-2 mb-2">
                    <i class="pi pi-search text-xl text-surface-400"></i>
                    <input 
                        #searchInput
                        type="text" 
                        pInputText 
                        placeholder="Search pages or commands... (e.g. 'blog', 'dark', 'login')" 
                        class="w-full border-none shadow-none focus:ring-0 text-lg bg-transparent"
                        (input)="onSearch($any($event.target).value)"
                        (keydown.arrowdown)="moveFocus(1)"
                        (keydown.arrowup)="moveFocus(-1)"
                        (keydown.enter)="executeActive()"
                    />
                </div>

                <div class="max-h-[300px] overflow-auto">
                    @for (item of filteredResults(); track item.label; let i = $index) {
                        <div 
                            class="p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-colors"
                            [ngClass]="{'bg-primary text-white': i === activeIndex, 'hover:bg-surface-100': i !== activeIndex}"
                            (click)="executeCommand(item)"
                            (mouseenter)="activeIndex = i"
                        >
                            <i [class]="item.icon"></i>
                            <div class="flex-1">
                                <div class="font-medium">{{ item.label }}</div>
                                <div class="text-xs" [ngClass]="i === activeIndex ? 'text-white/80' : 'text-surface-500'">{{ item.description }}</div>
                            </div>
                            <span class="text-xs opacity-50">Enter</span>
                        </div>
                    }
                    @if (filteredResults().length === 0) {
                        <div class="p-8 text-center text-surface-400 italic">
                            No results found for that search.
                        </div>
                    }
                </div>

                <div class="mt-4 pt-2 border-t border-surface flex items-center gap-4 text-[10px] text-surface-400 uppercase tracking-widest">
                    @for (sc of shortcuts; track sc.id) {
                        <div class="flex items-center gap-1">
                            <kbd class="bg-surface-100 px-1 rounded border">{{ sc.keys }}</kbd> {{ sc.label }}
                        </div>
                    }
                </div>
            </div>
        </p-dialog>
    `,
    styles: [`
        :host ::ng-deep {
            .command-palette-dialog {
                width: 90vw;
                max-width: 600px;
                background: var(--surface-card);
                border-radius: 16px;
                box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
                border: 1px solid var(--surface-border);
                overflow: hidden;
                .p-dialog-header { display: none; }
                .p-dialog-content { padding: 0; }
            }
            .command-palette-mask {
                backdrop-filter: blur(4px);
                background-color: rgba(0,0,0,0.1);
            }
        }
    `]
})
export class AppCommandPalette {
    visible = false;
    activeIndex = 0;
    query = '';

    readonly shortcuts = APP_SHORTCUTS;
    
    private readonly router = inject(Router);
    private readonly menuService = inject(AppMenuService);

    commands = [
        { label: 'Go to Dashboard', icon: 'pi pi-home', description: 'View marketing statistics', action: () => this.router.navigate(['/']) },
        { label: 'Blog List', icon: 'pi pi-image', description: 'Browse blog posts', action: () => this.router.navigate(['/apps/blog/list']) },
        { label: 'New Stepper', icon: 'pi pi-directions-alt', description: 'Access the multi-step wizard', action: () => this.router.navigate(['/apps/stepper']) },
        { label: 'Login View', icon: 'pi pi-sign-in', description: 'Go to the login page', action: () => this.router.navigate(['/apps/login-page']) },
        { label: 'System Settings', icon: 'pi pi-cog', description: 'Configure application theme', action: () => this.openThemeSettings() },
        { label: 'Chat App', icon: 'pi pi-comments', description: 'Open private messaging', action: () => this.router.navigate(['/apps/chat']) }
    ];

    filteredResults = signal(this.commands);

    @HostListener('window:keydown.control.k', ['$event'])
    @HostListener('window:keydown.meta.k', ['$event'])
    togglePalette(event: any) {
        event.preventDefault();
        this.visible = !this.visible;
        if (this.visible) {
            this.query = '';
            this.filteredResults.set(this.commands);
            this.activeIndex = 0;
        }
    }

    @HostListener('window:keydown.escape')
    close() {
        this.visible = false;
    }

    onSearch(q: string) {
        this.query = q;
        this.filteredResults.set(
            this.commands.filter(c => 
                c.label.toLowerCase().includes(q.toLowerCase()) || 
                c.description.toLowerCase().includes(q.toLowerCase())
            )
        );
        this.activeIndex = 0;
    }

    moveFocus(dir: number) {
        const count = this.filteredResults().length;
        if (count === 0) return;
        this.activeIndex = (this.activeIndex + dir + count) % count;
    }

    executeActive() {
        const active = this.filteredResults()[this.activeIndex];
        if (active) this.executeCommand(active);
    }

    executeCommand(cmd: any) {
        cmd.action();
        this.visible = false;
    }

    openThemeSettings() {
        // Mock action
        console.log('Opening theme settings...');
    }
}
