import { Injectable, signal, computed } from '@angular/core';

export type UserRole = 'admin' | 'editor' | 'viewer';

export interface AppNotification {
    id: number;
    title: string;
    message: string;
    time: string;
    read: boolean;
    type: 'info' | 'success' | 'warn' | 'error';
}

@Injectable({ providedIn: 'root' })
export class AppFeaturesService {
    // 1. Role Management
    readonly role = signal<UserRole>('admin');
    readonly isAdmin = computed(() => this.role() === 'admin');
    readonly isEditor = computed(() => this.role() === 'editor' || this.role() === 'admin');

    // 2. Language / i18n
    readonly language = signal<'en' | 'ar'>('ar');
    readonly isRTL = computed(() => this.language() === 'ar');

    constructor() {
        this.applyDirection();
    }

    // 3. Notifications
    private readonly _notifications = signal<AppNotification[]>([
        { id: 1, title: 'Build Success', message: 'Project compiled successfully with AG Grid.', time: '2m ago', read: false, type: 'success' },
        { id: 2, title: 'New User', message: 'A new editor joined the team.', time: '1h ago', read: false, type: 'info' },
        { id: 3, title: 'System Warning', message: 'Memory usage is slightly high.', time: '5h ago', read: true, type: 'warn' }
    ]);

    readonly notifications = computed(() => this._notifications());
    readonly unreadCount = computed(() => this._notifications().filter(n => !n.read).length);

    toggleLanguage() {
        this.language.set(this.language() === 'en' ? 'ar' : 'en');
        this.applyDirection();
    }

    private applyDirection() {
        const dir = this.isRTL() ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;
        document.documentElement.lang = this.language();
    }

    setRole(newRole: UserRole) {
        this.role.set(newRole);
    }

    markAsRead(id: number) {
        this._notifications.update(list => 
            list.map(n => n.id === id ? { ...n, read: true } : n)
        );
    }

    clearAll() {
        this._notifications.set([]);
    }
}
