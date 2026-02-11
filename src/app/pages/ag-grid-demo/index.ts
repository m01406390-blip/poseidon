import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import {
    AllCommunityModule,
    ModuleRegistry,
    ColDef,
    ColGroupDef,
    GridApi,
    GridReadyEvent,
    RowSelectionOptions,
    CellClassRules,
    ValueFormatterParams,
    CellEditingStoppedEvent,
    GetRowIdParams
} from 'ag-grid-community';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { AppFeaturesService } from '@/layout/service/app.features.service';
import { Employee, Transaction, ServerNode, generateEmployees, generateTransactions, generateServers } from './data';

ModuleRegistry.registerModules([AllCommunityModule]);

// ─── Metric card helper ──────────────────────────────────────────────────────
interface MetricCard {
    label: string;
    value: string;
    icon: string;
    color: string;
    trend: string;
    trendUp: boolean;
}

@Component({
    selector: 'app-ag-grid-demo',
    standalone: true,
    imports: [
        CommonModule, FormsModule, AgGridAngular,
        ButtonModule, TabsModule, SelectModule, InputTextModule,
        BadgeModule, TooltipModule, TagModule, ChipModule
    ],
    template: `
        <!-- ══════════ HEADER ══════════ -->
        <div class="flex flex-col gap-6 p-4">

            <!-- Title Row -->
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0 flex items-center gap-3">
                        <i class="pi pi-table text-primary text-2xl"></i>
                        AG Grid — Advanced Enterprise Demo
                    </h1>
                    <p class="text-surface-500 dark:text-surface-400 mt-1">
                        Showcasing sorting, filtering, grouping, editing, row drag, selection, export &amp; more.
                    </p>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-mono bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 px-2 py-1 rounded">
                        ag-grid-community v35
                    </span>
                    <span class="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                        {{ totalRows() }} rows loaded
                    </span>
                </div>
            </div>

            <!-- ══════════ METRICS CARDS ══════════ -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                @for (card of metrics(); track card.label) {
                    <div class="bg-surface-0 dark:bg-surface-900 rounded-xl border border-surface p-5 flex items-start gap-4 transition hover:shadow-md">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center text-white" [ngClass]="card.color">
                            <i [class]="card.icon" class="text-xl"></i>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm text-surface-500 dark:text-surface-400">{{ card.label }}</p>
                            <p class="text-2xl font-bold text-surface-900 dark:text-surface-0 mt-1">{{ card.value }}</p>
                            <p class="text-xs mt-1 flex items-center gap-1" [ngClass]="card.trendUp ? 'text-green-500' : 'text-red-500'">
                                <i [class]="card.trendUp ? 'pi pi-arrow-up-right' : 'pi pi-arrow-down-right'" class="text-[10px]"></i>
                                {{ card.trend }}
                            </p>
                        </div>
                    </div>
                }
            </div>

            <!-- ══════════ TABS ══════════ -->
            <p-tabs [value]="activeTab()" (valueChange)="onTabChange($event)">

                <!-- Tab Navigation -->
                <p-tablist>
                    <p-tab [value]="0">
                        <i class="pi pi-users me-2"></i> Employees
                        <span class="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full ms-2">{{ employees().length }}</span>
                    </p-tab>
                    <p-tab [value]="1">
                        <i class="pi pi-credit-card me-2"></i> Transactions
                        <span class="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full ms-2">{{ transactions().length }}</span>
                    </p-tab>
                    <p-tab [value]="2">
                        <i class="pi pi-server me-2"></i> Infrastructure
                        <span class="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full ms-2">{{ servers().length }}</span>
                    </p-tab>
                </p-tablist>

                <!-- ═══════ TAB 1: EMPLOYEES ═══════ -->
                <p-tabpanel [value]="0">
                    <div class="flex flex-col gap-4 pt-4">
                        <!-- Toolbar -->
                        <div class="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                            <div class="flex items-center gap-2 flex-wrap flex-1">
                                <span class="p-input-icon-start relative flex items-center">
                                    <i class="pi pi-search absolute start-3 text-surface-400"></i>
                                    <input pInputText type="text" [ngModel]="empQuickFilter()" (ngModelChange)="empQuickFilter.set($event)"
                                           placeholder="Quick search…" class="ps-10 w-56" />
                                </span>
                                <p-select [options]="departmentOptions" [ngModel]="empDeptFilter()" (ngModelChange)="onDeptFilter($event)"
                                          placeholder="All Departments" [showClear]="true" styleClass="w-48"></p-select>
                                <p-select [options]="statusOptions" [ngModel]="empStatusFilter()" (ngModelChange)="onStatusFilter($event)"
                                          placeholder="All Statuses" [showClear]="true" styleClass="w-40"></p-select>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-sm text-surface-500" *ngIf="empSelectedCount() > 0">
                                    {{ empSelectedCount() }} selected
                                </span>
                                <p-button label="Export CSV" icon="pi pi-download" severity="success" size="small" (click)="exportCsv('emp')"></p-button>
                                <p-button icon="pi pi-refresh" variant="outlined" size="small" (click)="refreshEmployees()" pTooltip="Regenerate data"></p-button>
                                <p-button icon="pi pi-expand" variant="outlined" size="small" (click)="autoSizeAll('emp')" pTooltip="Auto-size columns"></p-button>
                            </div>
                        </div>

                        <!-- Grid -->
                        <div class="bg-surface-0 dark:bg-surface-900 rounded-xl border border-surface overflow-hidden">
                            <ag-grid-angular
                                #empGrid
                                style="width: 100%; height: 600px;"
                                class="ag-theme-quartz"
                                [rowData]="employees()"
                                [columnDefs]="employeeColDefs"
                                [defaultColDef]="defaultColDef"
                                [enableRtl]="features.isRTL()"
                                [pagination]="true"
                                [paginationPageSize]="25"
                                [paginationPageSizeSelector]="[10, 25, 50, 100]"
                                [rowSelection]="rowSelectionMulti"
                                [rowDragManaged]="true"
                                [animateRows]="true"
                                [quickFilterText]="empQuickFilter()"
                                [getRowId]="getEmployeeRowId"
                                (gridReady)="onEmpGridReady($event)"
                                (selectionChanged)="onEmpSelectionChanged()"
                                (cellEditingStopped)="onCellEditStopped($event)"
                                [tooltipShowDelay]="300"
                                [suppressCellFocus]="false"
                            ></ag-grid-angular>
                        </div>
                    </div>
                </p-tabpanel>

                <!-- ═══════ TAB 2: TRANSACTIONS ═══════ -->
                <p-tabpanel [value]="1">
                    <div class="flex flex-col gap-4 pt-4">
                        <div class="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                            <div class="flex items-center gap-2 flex-1">
                                <span class="p-input-icon-start relative flex items-center">
                                    <i class="pi pi-search absolute start-3 text-surface-400"></i>
                                    <input pInputText type="text" [ngModel]="txQuickFilter()" (ngModelChange)="txQuickFilter.set($event)"
                                           placeholder="Search transactions…" class="ps-10 w-56" />
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <p-button label="Export CSV" icon="pi pi-download" severity="success" size="small" (click)="exportCsv('tx')"></p-button>
                                <p-button icon="pi pi-refresh" variant="outlined" size="small" (click)="refreshTransactions()" pTooltip="Regenerate data"></p-button>
                            </div>
                        </div>

                        <div class="bg-surface-0 dark:bg-surface-900 rounded-xl border border-surface overflow-hidden">
                            <ag-grid-angular
                                #txGrid
                                style="width: 100%; height: 600px;"
                                class="ag-theme-quartz"
                                [rowData]="transactions()"
                                [columnDefs]="txColDefs"
                                [defaultColDef]="defaultColDef"
                                [enableRtl]="features.isRTL()"
                                [pagination]="true"
                                [paginationPageSize]="25"
                                [paginationPageSizeSelector]="[10, 25, 50, 100]"
                                [rowSelection]="rowSelectionMulti"
                                [animateRows]="true"
                                [quickFilterText]="txQuickFilter()"
                                (gridReady)="onTxGridReady($event)"
                            ></ag-grid-angular>
                        </div>
                    </div>
                </p-tabpanel>

                <!-- ═══════ TAB 3: INFRASTRUCTURE ═══════ -->
                <p-tabpanel [value]="2">
                    <div class="flex flex-col gap-4 pt-4">
                        <div class="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                            <div class="flex items-center gap-2 flex-1">
                                <span class="p-input-icon-start relative flex items-center">
                                    <i class="pi pi-search absolute start-3 text-surface-400"></i>
                                    <input pInputText type="text" [ngModel]="srvQuickFilter()" (ngModelChange)="srvQuickFilter.set($event)"
                                           placeholder="Search servers…" class="ps-10 w-56" />
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <p-button label="Export CSV" icon="pi pi-download" severity="success" size="small" (click)="exportCsv('srv')"></p-button>
                                <p-button icon="pi pi-refresh" variant="outlined" size="small" (click)="refreshServers()" pTooltip="Regenerate data"></p-button>
                            </div>
                        </div>

                        <div class="bg-surface-0 dark:bg-surface-900 rounded-xl border border-surface overflow-hidden">
                            <ag-grid-angular
                                #srvGrid
                                style="width: 100%; height: 600px;"
                                class="ag-theme-quartz"
                                [rowData]="servers()"
                                [columnDefs]="serverColDefs"
                                [defaultColDef]="defaultColDef"
                                [enableRtl]="features.isRTL()"
                                [pagination]="true"
                                [paginationPageSize]="20"
                                [paginationPageSizeSelector]="[10, 20, 50]"
                                [rowSelection]="rowSelectionMulti"
                                [animateRows]="true"
                                [quickFilterText]="srvQuickFilter()"
                                (gridReady)="onSrvGridReady($event)"
                            ></ag-grid-angular>
                        </div>
                    </div>
                </p-tabpanel>

            </p-tabs>

            <!-- ══════════ FEATURE HIGHLIGHTS ══════════ -->
            <div class="bg-surface-0 dark:bg-surface-900 rounded-xl border border-surface p-6">
                <h3 class="text-lg font-bold text-surface-900 dark:text-surface-0 mb-4 flex items-center gap-2">
                    <i class="pi pi-bolt text-primary"></i>
                    Features Demonstrated
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    @for (feat of featureList; track feat.label) {
                        <div class="flex items-center gap-2 p-3 rounded-lg bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
                            <i [class]="feat.icon" class="text-primary text-sm"></i>
                            <span class="text-xs font-medium">{{ feat.label }}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    styles: [`
        :host ::ng-deep .ag-theme-quartz {
            --ag-border-radius: 0;
            --ag-row-hover-color: rgba(var(--primary-500-rgb, 59,130,246), 0.06);
            --ag-selected-row-background-color: rgba(var(--primary-500-rgb, 59,130,246), 0.10);
            --ag-header-background-color: var(--surface-50, #f8fafc);
            --ag-header-foreground-color: var(--surface-800, #1e293b);
            font-family: inherit;
        }
        :host ::ng-deep .dark .ag-theme-quartz {
            --ag-background-color: var(--surface-900, #0f172a);
            --ag-header-background-color: var(--surface-800, #1e293b);
            --ag-odd-row-background-color: var(--surface-900, #0f172a);
            --ag-foreground-color: var(--surface-200, #e2e8f0);
            --ag-header-foreground-color: var(--surface-200, #e2e8f0);
            --ag-border-color: var(--surface-700, #334155);
        }
        .perf-bar {
            height: 8px;
            border-radius: 4px;
            background: var(--surface-200);
            overflow: hidden;
            width: 100%;
        }
        .perf-bar-fill {
            height: 100%;
            border-radius: 4px;
            transition: width 0.4s ease;
        }
        .usage-bar {
            width: 60px; height: 6px; border-radius: 3px; background: var(--surface-200); display: inline-block; overflow: hidden; vertical-align: middle;
        }
        .usage-bar-fill {
            height: 100%; border-radius: 3px;
        }
    `]
})
export class AgGridDemoComponent implements OnInit {
    features = inject(AppFeaturesService);

    // ─── Grid API refs ───────────────────────────────────────────────────────
    private empApi!: GridApi;
    private txApi!: GridApi;
    private srvApi!: GridApi;

    // ─── Active Tab ──────────────────────────────────────────────────────────
    activeTab = signal<number>(0);

    // ─── Data signals ────────────────────────────────────────────────────────
    employees = signal<Employee[]>([]);
    transactions = signal<Transaction[]>([]);
    servers = signal<ServerNode[]>([]);

    // ─── Filters ─────────────────────────────────────────────────────────────
    empQuickFilter = signal('');
    txQuickFilter = signal('');
    srvQuickFilter = signal('');
    empDeptFilter = signal<string | null>(null);
    empStatusFilter = signal<string | null>(null);
    empSelectedCount = signal(0);

    // ─── Filter options ──────────────────────────────────────────────────────
    departmentOptions = [
        'Engineering', 'Design', 'Marketing', 'Sales', 'Finance', 'HR', 'Operations', 'Legal', 'Product', 'Data Science'
    ].map(d => ({ label: d, value: d }));

    statusOptions = [
        'Active', 'On Leave', 'Remote', 'Terminated'
    ].map(s => ({ label: s, value: s }));

    // ─── Row selection config ────────────────────────────────────────────────
    rowSelectionMulti: RowSelectionOptions = {
        mode: 'multiRow',
        headerCheckbox: true
    };

    // ─── Metrics (computed) ──────────────────────────────────────────────────
    totalRows = computed(() => this.employees().length + this.transactions().length + this.servers().length);

    metrics = computed<MetricCard[]>(() => {
        const emps = this.employees();
        const txs = this.transactions();
        const srvs = this.servers();

        const avgPerf = emps.length > 0 ? Math.round(emps.reduce((s, e) => s + e.performance, 0) / emps.length) : 0;
        const totalTxAmount = txs.reduce((s, t) => s + t.amount, 0);
        const activeServers = srvs.filter(s => s.status === 'Running').length;
        const totalSrvCost = srvs.reduce((s, n) => s + n.cost, 0);

        return [
            {
                label: 'Total Employees',
                value: emps.length.toLocaleString(),
                icon: 'pi pi-users',
                color: 'bg-blue-500',
                trend: `Avg perf ${avgPerf}%`,
                trendUp: avgPerf >= 60
            },
            {
                label: 'Transaction Volume',
                value: '$' + this.formatCompact(totalTxAmount),
                icon: 'pi pi-credit-card',
                color: 'bg-green-500',
                trend: `${txs.filter(t => t.status === 'Completed').length} completed`,
                trendUp: true
            },
            {
                label: 'Active Servers',
                value: `${activeServers}/${srvs.length}`,
                icon: 'pi pi-server',
                color: 'bg-purple-500',
                trend: `${srvs.filter(s => s.status === 'Error').length} errors`,
                trendUp: srvs.filter(s => s.status === 'Error').length === 0
            },
            {
                label: 'Monthly Infra Cost',
                value: '$' + this.formatCompact(totalSrvCost),
                icon: 'pi pi-dollar',
                color: 'bg-orange-500',
                trend: `${srvs.filter(s => s.provider === 'AWS').length} AWS nodes`,
                trendUp: true
            }
        ];
    });

    // ─── Feature highlight list ──────────────────────────────────────────────
    featureList = [
        { icon: 'pi pi-sort-alt', label: 'Multi-Sort' },
        { icon: 'pi pi-filter', label: 'Column Filters' },
        { icon: 'pi pi-search', label: 'Quick Search' },
        { icon: 'pi pi-arrows-v', label: 'Row Drag' },
        { icon: 'pi pi-pencil', label: 'Cell Editing' },
        { icon: 'pi pi-check-square', label: 'Row Selection' },
        { icon: 'pi pi-download', label: 'CSV Export' },
        { icon: 'pi pi-arrows-h', label: 'Column Resize' },
        { icon: 'pi pi-th-large', label: 'Column Groups' },
        { icon: 'pi pi-pin', label: 'Column Pinning' },
        { icon: 'pi pi-palette', label: 'Custom Renderers' },
        { icon: 'pi pi-sliders-h', label: 'Cell Class Rules' },
        { icon: 'pi pi-file-export', label: 'Pagination' },
        { icon: 'pi pi-align-right', label: 'RTL Support' },
        { icon: 'pi pi-bolt', label: 'Animated Rows' },
        { icon: 'pi pi-id-card', label: 'Tooltips' },
        { icon: 'pi pi-bars', label: 'Auto-Size' },
        { icon: 'pi pi-chart-bar', label: 'Progress Bars' }
    ];

    // ─── Default column definition ───────────────────────────────────────────
    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true,
        minWidth: 80,
        wrapHeaderText: true,
        autoHeaderHeight: true
    };

    // ┌──────────────────────────────────────────────────────────────────────────
    // │  COLUMN DEFINITIONS — EMPLOYEES
    // └──────────────────────────────────────────────────────────────────────────
    employeeColDefs: (ColDef | ColGroupDef)[] = [
        {
            headerName: '',
            field: 'id',
            width: 50,
            rowDrag: true,
            checkboxSelection: true,
            headerCheckboxSelection: true,
            filter: false,
            sortable: false,
            pinned: 'left',
            lockPosition: true
        },
        {
            headerName: 'Employee Info',
            children: [
                {
                    field: 'name',
                    headerName: 'Name',
                    flex: 1.5,
                    minWidth: 200,
                    pinned: 'left',
                    cellRenderer: (params: any) => {
                        if (!params.value) return '';
                        return `<div class="flex items-center gap-3 py-1">
                            <img src="${params.data.avatar}" alt="" class="w-8 h-8 rounded-full object-cover border-2 border-surface-200 dark:border-surface-600" onerror="this.style.display='none'" />
                            <div class="flex flex-col">
                                <span class="font-semibold text-surface-900 dark:text-surface-0 text-sm">${params.value}</span>
                                <span class="text-xs text-surface-400">${params.data.email}</span>
                            </div>
                        </div>`;
                    },
                    tooltipValueGetter: (params: any) => `${params.data.name} — ${params.data.email}`
                },
                {
                    field: 'department',
                    headerName: 'Department',
                    width: 150,
                    cellRenderer: (params: any) => {
                        const icons: Record<string, string> = {
                            'Engineering': '\u{1F4BB}', 'Design': '\u{1F3A8}', 'Marketing': '\u{1F4E3}', 'Sales': '\u{1F4B0}',
                            'Finance': '\u{1F4CA}', 'HR': '\u{1F465}', 'Operations': '\u2699\uFE0F', 'Legal': '\u2696\uFE0F',
                            'Product': '\u{1F4E6}', 'Data Science': '\u{1F52C}'
                        };
                        return `<span class="inline-flex items-center gap-1.5">${icons[params.value] || '\u{1F4C1}'} ${params.value}</span>`;
                    }
                },
                {
                    field: 'role',
                    headerName: 'Role',
                    flex: 1,
                    minWidth: 160
                }
            ]
        },
        {
            headerName: 'Status & Level',
            children: [
                {
                    field: 'status',
                    headerName: 'Status',
                    width: 130,
                    cellRenderer: (params: any) => {
                        const map: Record<string, { bg: string; text: string; dot: string }> = {
                            'Active':     { bg: 'bg-green-50 dark:bg-green-900/30',  text: 'text-green-700 dark:text-green-400',  dot: 'bg-green-500' },
                            'On Leave':   { bg: 'bg-amber-50 dark:bg-amber-900/30',  text: 'text-amber-700 dark:text-amber-400',  dot: 'bg-amber-500' },
                            'Remote':     { bg: 'bg-blue-50 dark:bg-blue-900/30',    text: 'text-blue-700 dark:text-blue-400',    dot: 'bg-blue-500' },
                            'Terminated': { bg: 'bg-red-50 dark:bg-red-900/30',      text: 'text-red-700 dark:text-red-400',      dot: 'bg-red-500' }
                        };
                        const s = map[params.value] || map['Active'];
                        return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${s.bg} ${s.text}">
                            <span class="w-1.5 h-1.5 rounded-full ${s.dot}"></span>${params.value}</span>`;
                    },
                    filterParams: { values: ['Active', 'On Leave', 'Remote', 'Terminated'] }
                },
                {
                    field: 'level',
                    headerName: 'Level',
                    width: 120,
                    cellRenderer: (params: any) => {
                        const colors: Record<string, string> = {
                            'Junior': 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
                            'Mid': 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
                            'Senior': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
                            'Lead': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
                            'Manager': 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
                            'Director': 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'
                        };
                        return `<span class="px-2.5 py-1 rounded-md text-xs font-bold ${colors[params.value] || ''}">${params.value}</span>`;
                    }
                }
            ]
        },
        {
            headerName: 'Compensation & Performance',
            children: [
                {
                    field: 'salary',
                    headerName: 'Salary',
                    width: 140,
                    editable: true,
                    valueFormatter: (p: ValueFormatterParams) => p.value != null ? '$' + p.value.toLocaleString() : '',
                    cellClassRules: {
                        'text-green-600 dark:text-green-400 font-bold': (p: any) => p.value >= 120000,
                        'text-amber-600 dark:text-amber-400': (p: any) => p.value >= 80000 && p.value < 120000
                    } as CellClassRules,
                    tooltipValueGetter: (p: any) => `Salary: $${p.value?.toLocaleString()} — Double-click to edit`
                },
                {
                    field: 'performance',
                    headerName: 'Performance',
                    width: 180,
                    cellRenderer: (params: any) => {
                        const val = params.value ?? 0;
                        const color = val >= 80 ? '#22c55e' : val >= 60 ? '#3b82f6' : val >= 40 ? '#f59e0b' : '#ef4444';
                        return `<div class="flex items-center gap-2 w-full">
                            <div class="perf-bar flex-1"><div class="perf-bar-fill" style="width:${val}%;background:${color}"></div></div>
                            <span class="text-xs font-mono font-bold" style="color:${color}">${val}%</span>
                        </div>`;
                    }
                },
                {
                    field: 'satisfaction',
                    headerName: 'Satisfaction',
                    width: 140,
                    cellRenderer: (params: any) => {
                        const val = params.value ?? 0;
                        let stars = '';
                        for (let i = 1; i <= 5; i++) {
                            stars += `<i class="pi pi-star-fill text-xs ${i <= val ? 'text-amber-400' : 'text-surface-200 dark:text-surface-700'}"></i>`;
                        }
                        return `<div class="flex items-center gap-0.5">${stars}</div>`;
                    }
                }
            ]
        },
        {
            headerName: 'Details',
            children: [
                {
                    field: 'country',
                    headerName: 'Country',
                    width: 160,
                    cellRenderer: (params: any) => {
                        const code = params.data?.countryCode || '';
                        return `<div class="flex items-center gap-2">
                            <img src="https://flagcdn.com/w20/${code}.png" alt="${code}" class="h-3.5 rounded-sm" onerror="this.style.display='none'" />
                            <span>${params.value}</span>
                        </div>`;
                    }
                },
                {
                    field: 'skills',
                    headerName: 'Skills',
                    flex: 1,
                    minWidth: 200,
                    cellRenderer: (params: any) => {
                        const skills: string[] = params.value || [];
                        return skills.map(s =>
                            `<span class="inline-block bg-primary/10 text-primary text-[10px] font-semibold px-1.5 py-0.5 rounded me-1">${s}</span>`
                        ).join('');
                    },
                    tooltipValueGetter: (params: any) => (params.value || []).join(', ')
                },
                {
                    field: 'projects',
                    headerName: 'Projects',
                    width: 100,
                    cellRenderer: (params: any) => {
                        return `<span class="inline-flex items-center justify-center bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-300 w-8 h-8 rounded-full text-sm font-bold">${params.value}</span>`;
                    }
                },
                {
                    field: 'joinDate',
                    headerName: 'Joined',
                    width: 130,
                    valueFormatter: (p: ValueFormatterParams) => {
                        if (!p.value) return '';
                        return new Date(p.value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                    }
                }
            ]
        }
    ];

    // ┌──────────────────────────────────────────────────────────────────────────
    // │  COLUMN DEFINITIONS — TRANSACTIONS
    // └──────────────────────────────────────────────────────────────────────────
    txColDefs: (ColDef | ColGroupDef)[] = [
        {
            field: 'txId',
            headerName: 'Transaction ID',
            width: 150,
            pinned: 'left',
            cellRenderer: (params: any) =>
                `<span class="font-mono text-xs font-bold text-primary">${params.value}</span>`
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 140,
            valueFormatter: (p: ValueFormatterParams) => {
                if (!p.value) return '';
                return new Date(p.value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            }
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120,
            cellRenderer: (params: any) => {
                const icons: Record<string, string> = {
                    'Credit': 'pi-arrow-down text-green-500',
                    'Debit': 'pi-arrow-up text-red-500',
                    'Transfer': 'pi-arrow-right-arrow-left text-blue-500',
                    'Refund': 'pi-replay text-amber-500'
                };
                const ic = icons[params.value] || '';
                return `<span class="inline-flex items-center gap-1.5 font-medium"><i class="pi ${ic} text-xs"></i>${params.value}</span>`;
            }
        },
        { field: 'category', headerName: 'Category', width: 150 },
        { field: 'merchant', headerName: 'Merchant', width: 140, cellStyle: { fontWeight: 600 } },
        {
            field: 'amount',
            headerName: 'Amount',
            width: 150,
            cellRenderer: (params: any) => {
                const val = params.value ?? 0;
                const isCredit = params.data?.type === 'Credit' || params.data?.type === 'Refund';
                const color = isCredit ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
                const prefix = isCredit ? '+' : '-';
                return `<span class="font-bold font-mono ${color}">${prefix}$${val.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>`;
            },
            comparator: (a: number, b: number) => a - b
        },
        { field: 'currency', headerName: 'Currency', width: 100 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            cellRenderer: (params: any) => {
                const map: Record<string, { bg: string; text: string }> = {
                    'Completed': { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400' },
                    'Pending':   { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
                    'Failed':    { bg: 'bg-red-100 dark:bg-red-900/30',     text: 'text-red-700 dark:text-red-400' },
                    'Cancelled': { bg: 'bg-surface-100 dark:bg-surface-800', text: 'text-surface-600 dark:text-surface-400' }
                };
                const s = map[params.value] || map['Pending'];
                return `<span class="px-2.5 py-1 rounded-full text-xs font-bold ${s.bg} ${s.text}">${params.value}</span>`;
            }
        },
        {
            field: 'risk',
            headerName: 'Risk',
            width: 100,
            cellRenderer: (params: any) => {
                const map: Record<string, string> = {
                    'Low': 'bg-green-500',
                    'Medium': 'bg-amber-500',
                    'High': 'bg-red-500'
                };
                const bg = map[params.value] || 'bg-surface-400';
                return `<span class="inline-flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full ${bg}"></span>
                    <span class="text-xs font-medium">${params.value}</span>
                </span>`;
            }
        },
        { field: 'account', headerName: 'Account', width: 120, cellClass: 'font-mono text-xs' },
        { field: 'reference', headerName: 'Reference', width: 130, cellClass: 'font-mono text-xs' }
    ];

    // ┌──────────────────────────────────────────────────────────────────────────
    // │  COLUMN DEFINITIONS — SERVERS
    // └──────────────────────────────────────────────────────────────────────────
    serverColDefs: (ColDef | ColGroupDef)[] = [
        {
            headerName: 'Server Identity',
            children: [
                {
                    field: 'hostname',
                    headerName: 'Hostname',
                    width: 170,
                    pinned: 'left',
                    cellRenderer: (params: any) => `<span class="font-mono font-bold text-primary text-sm">${params.value}</span>`
                },
                {
                    field: 'ip',
                    headerName: 'IP Address',
                    width: 150,
                    cellClass: 'font-mono text-xs'
                },
                {
                    field: 'status',
                    headerName: 'Status',
                    width: 140,
                    cellRenderer: (params: any) => {
                        const map: Record<string, { bg: string; text: string; icon: string }> = {
                            'Running':     { bg: 'bg-green-100 dark:bg-green-900/30',  text: 'text-green-700 dark:text-green-400',  icon: 'pi-play-circle' },
                            'Stopped':     { bg: 'bg-surface-100 dark:bg-surface-800', text: 'text-surface-600 dark:text-surface-400', icon: 'pi-stop-circle' },
                            'Maintenance': { bg: 'bg-amber-100 dark:bg-amber-900/30',  text: 'text-amber-700 dark:text-amber-400',  icon: 'pi-wrench' },
                            'Error':       { bg: 'bg-red-100 dark:bg-red-900/30',      text: 'text-red-700 dark:text-red-400',      icon: 'pi-exclamation-triangle' }
                        };
                        const s = map[params.value] || map['Running'];
                        return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${s.bg} ${s.text}">
                            <i class="pi ${s.icon} text-[10px]"></i>${params.value}</span>`;
                    }
                }
            ]
        },
        {
            headerName: 'Infrastructure',
            children: [
                { field: 'provider', headerName: 'Provider', width: 100,
                    cellRenderer: (params: any) => {
                        const colors: Record<string, string> = {
                            'AWS': 'text-orange-500', 'Azure': 'text-blue-500', 'GCP': 'text-red-500'
                        };
                        return `<span class="font-bold text-sm ${colors[params.value] || ''}">${params.value}</span>`;
                    }
                },
                { field: 'region', headerName: 'Region', width: 150, cellClass: 'font-mono text-xs' },
                { field: 'type', headerName: 'Instance Type', width: 140, cellClass: 'font-mono text-xs' },
                { field: 'os', headerName: 'OS', width: 170 }
            ]
        },
        {
            headerName: 'Resource Usage',
            children: [
                {
                    field: 'cpu',
                    headerName: 'CPU %',
                    width: 150,
                    cellRenderer: (params: any) => this.renderUsageBar(params.value)
                },
                {
                    field: 'memory',
                    headerName: 'Memory %',
                    width: 150,
                    cellRenderer: (params: any) => this.renderUsageBar(params.value)
                },
                {
                    field: 'disk',
                    headerName: 'Disk %',
                    width: 150,
                    cellRenderer: (params: any) => this.renderUsageBar(params.value)
                }
            ]
        },
        {
            headerName: 'Operations',
            children: [
                {
                    field: 'uptime',
                    headerName: 'Uptime',
                    width: 120,
                    valueFormatter: (p: ValueFormatterParams) => {
                        const h = p.value ?? 0;
                        if (h >= 720) return `${Math.round(h / 720)}mo`;
                        if (h >= 24) return `${Math.round(h / 24)}d`;
                        return `${h}h`;
                    }
                },
                {
                    field: 'lastPing',
                    headerName: 'Latency',
                    width: 110,
                    cellRenderer: (params: any) => {
                        const ms = params.value ?? 0;
                        const color = ms <= 50 ? 'text-green-500' : ms <= 150 ? 'text-amber-500' : 'text-red-500';
                        return `<span class="font-mono font-bold ${color}">${ms}ms</span>`;
                    }
                },
                {
                    field: 'cost',
                    headerName: 'Monthly Cost',
                    width: 140,
                    valueFormatter: (p: ValueFormatterParams) => p.value != null ? '$' + p.value.toLocaleString('en-US', { minimumFractionDigits: 2 }) : '',
                    cellClassRules: {
                        'text-red-600 dark:text-red-400 font-bold': (p: any) => p.value >= 1500,
                        'text-amber-600 dark:text-amber-400': (p: any) => p.value >= 500 && p.value < 1500,
                        'text-green-600 dark:text-green-400': (p: any) => p.value < 500
                    } as CellClassRules
                },
                {
                    field: 'tags',
                    headerName: 'Tags',
                    flex: 1,
                    minWidth: 200,
                    cellRenderer: (params: any) => {
                        const tags: string[] = params.value || [];
                        return tags.map(t =>
                            `<span class="inline-block bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 text-[10px] font-semibold px-1.5 py-0.5 rounded me-1">${t}</span>`
                        ).join('');
                    },
                    tooltipValueGetter: (params: any) => (params.value || []).join(', ')
                }
            ]
        }
    ];

    // ─── Row ID getters ──────────────────────────────────────────────────────
    getEmployeeRowId = (params: GetRowIdParams) => String(params.data.id);

    // ─── Init ────────────────────────────────────────────────────────────────
    ngOnInit() {
        this.employees.set(generateEmployees(200));
        this.transactions.set(generateTransactions(150));
        this.servers.set(generateServers(80));
    }

    // ─── Tab change ────────────────────────────────────────────────────────
    onTabChange(value: string | number) {
        this.activeTab.set(Number(value));
    }

    // ─── Grid ready handlers ─────────────────────────────────────────────────
    onEmpGridReady(event: GridReadyEvent) { this.empApi = event.api; }
    onTxGridReady(event: GridReadyEvent) { this.txApi = event.api; }
    onSrvGridReady(event: GridReadyEvent) { this.srvApi = event.api; }

    // ─── Employee external filter bridge ─────────────────────────────────────
    onDeptFilter(value: string | null) {
        this.empDeptFilter.set(value);
        this.applyExternalFilters();
    }
    onStatusFilter(value: string | null) {
        this.empStatusFilter.set(value);
        this.applyExternalFilters();
    }
    private applyExternalFilters() {
        if (!this.empApi) return;
        const filters: any = {};
        const dept = this.empDeptFilter();
        const status = this.empStatusFilter();
        if (dept) {
            filters['department'] = { type: 'equals', filter: dept };
        }
        if (status) {
            filters['status'] = { type: 'equals', filter: status };
        }
        this.empApi.setFilterModel(Object.keys(filters).length ? filters : null);
        this.empApi.onFilterChanged();
    }

    // ─── Selection ───────────────────────────────────────────────────────────
    onEmpSelectionChanged() {
        if (!this.empApi) return;
        this.empSelectedCount.set(this.empApi.getSelectedRows().length);
    }

    // ─── Cell editing ────────────────────────────────────────────────────────
    onCellEditStopped(_event: CellEditingStoppedEvent) {
        // Editing demo — could show a toast here
    }

    // ─── CSV Export ──────────────────────────────────────────────────────────
    exportCsv(grid: 'emp' | 'tx' | 'srv') {
        const api = grid === 'emp' ? this.empApi : grid === 'tx' ? this.txApi : this.srvApi;
        if (api) api.exportDataAsCsv({ fileName: `ag-grid-${grid}-export.csv` });
    }

    // ─── Auto-size columns ───────────────────────────────────────────────────
    autoSizeAll(grid: 'emp' | 'tx' | 'srv') {
        const api = grid === 'emp' ? this.empApi : grid === 'tx' ? this.txApi : this.srvApi;
        if (api) api.autoSizeAllColumns();
    }

    // ─── Refresh data ────────────────────────────────────────────────────────
    refreshEmployees() { this.employees.set(generateEmployees(200)); }
    refreshTransactions() { this.transactions.set(generateTransactions(150)); }
    refreshServers() { this.servers.set(generateServers(80)); }

    // ─── Helpers ─────────────────────────────────────────────────────────────
    private renderUsageBar(val: number): string {
        const color = val >= 85 ? '#ef4444' : val >= 60 ? '#f59e0b' : '#22c55e';
        return `<div class="flex items-center gap-2">
            <div class="usage-bar"><div class="usage-bar-fill" style="width:${val}%;background:${color}"></div></div>
            <span class="text-xs font-mono font-bold" style="color:${color}">${val}%</span>
        </div>`;
    }

    private formatCompact(n: number): string {
        if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
        if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K';
        return n.toFixed(0);
    }
}
