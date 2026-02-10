import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AppFeaturesService } from '@/layout/service/app.features.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
    selector: 'app-ag-grid-demo',
    standalone: true,
    imports: [CommonModule, AgGridAngular, ButtonModule, CardModule, TagModule],
    template: `
        <div class="p-4 flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-2xl font-bold">AG Grid Advanced Demo</h2>
                    <p class="text-surface-500">Includes Export, Custom Renderers, and Theme integration.</p>
                </div>
                <div class="flex gap-2">
                    <p-button label="Export to CSV" icon="pi pi-file-excel" (click)="onExport()" severity="success"></p-button>
                    <p-button label="Refresh Data" icon="pi pi-refresh" (click)="refreshData()" variant="outlined"></p-button>
                </div>
            </div>

            <p-card styleClass="p-0 overflow-hidden">
                <ag-grid-angular
                    style="width: 100%; height: 500px;"
                    class="ag-theme-quartz"
                    [rowData]="rowData()"
                    [columnDefs]="columnDefs"
                    [defaultColDef]="defaultColDef"
                    [enableRtl]="features.isRTL()"
                    (gridReady)="onGridReady($event)"
                    [pagination]="true"
                    [paginationPageSize]="10"
                >
                </ag-grid-angular>
            </p-card>
        </div>
    `
})
export class AgGridDemoComponent {
    private gridApi!: GridApi;
    features = inject(AppFeaturesService);

    rowData = signal<any[]>([
        { id: 1, name: 'Premium Dashboard', category: 'Software', status: 'Active', price: 299, growth: 15.2 },
        { id: 2, name: 'UI Kit Pro', category: 'Assets', status: 'Pending', price: 99, growth: -2.5 },
        { id: 3, name: 'Mobile App Template', category: 'Mobile', status: 'Completed', price: 150, growth: 25.0 },
        { id: 4, name: 'Backend Services', category: 'Infrastructure', status: 'Active', price: 500, growth: 8.7 },
        { id: 5, name: 'Icon Pack', category: 'Assets', status: 'Active', price: 25, growth: 0.0 },
        { id: 6, name: 'Cloud Storage', category: 'Cloud', status: 'Pending', price: 120, growth: 12.3 },
        { id: 7, name: 'Security Suite', category: 'Software', status: 'Active', price: 450, growth: 4.1 },
        { id: 8, name: 'Design System', category: 'Assets', status: 'Completed', price: 199, growth: 30.5 },
        { id: 9, name: 'API Gateway', category: 'Infrastructure', status: 'Active', price: 350, growth: 5.5 },
        { id: 10, name: 'Monitoring Tool', category: 'DevOps', status: 'Active', price: 280, growth: 18.2 },
        { id: 11, name: 'DevOps Secrets', category: 'DevOps', status: 'Expired', price: 150, growth: -10.0 }
    ]);

    columnDefs: ColDef[] = [
        { field: 'id', width: 70 },
        { 
            field: 'name', 
            flex: 1, 
            cellStyle: { fontWeight: 'bold', color: 'var(--primary-color)' }
        },
        { 
            field: 'status',
            cellRenderer: (params: any) => {
                const colorMap: any = {
                    'Active': 'success',
                    'Pending': 'warn',
                    'Completed': 'info',
                    'Expired': 'danger'
                };
                return `<span class="bg-${colorMap[params.value] || 'primary'}-100 text-${colorMap[params.value] || 'primary'}-700 px-2 py-1 rounded-md text-xs font-bold">${params.value}</span>`;
            }
        },
        { 
            field: 'growth',
            headerName: 'Performance',
            cellRenderer: (params: any) => {
                const color = params.value >= 0 ? 'text-green-500' : 'text-red-500';
                const icon = params.value >= 0 ? 'pi-arrow-up' : 'pi-arrow-down';
                return `<div class="${color} flex items-center gap-1"><i class="pi ${icon} text-[10px]"></i> ${Math.abs(params.value)}%</div>`;
            }
        },
        { 
            field: 'price', 
            valueFormatter: (params) => `$${params.value.toLocaleString()}`,
            width: 120 
        }
    ];

    defaultColDef: ColDef = {
        sortable: true,
        filter: true,
        resizable: true
    };

    onGridReady(params: GridReadyEvent) {
        this.gridApi = params.api;
    }

    onExport() {
        this.gridApi.exportDataAsCsv();
    }

    refreshData() {
        // Shuffle or refresh logic
        const data = [...this.rowData()];
        this.rowData.set(data.sort(() => Math.random() - 0.5));
    }
}
