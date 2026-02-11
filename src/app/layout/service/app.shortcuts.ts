export type AppShortcut = {
    id: 'palette.navigate' | 'palette.select' | 'palette.close';
    keys: string;
    label: string;
};

export const APP_SHORTCUTS: AppShortcut[] = [
    { id: 'palette.navigate', keys: '↑↓', label: 'Navigate' },
    { id: 'palette.select', keys: '↵', label: 'Select' },
    { id: 'palette.close', keys: 'esc', label: 'Close' }
];
