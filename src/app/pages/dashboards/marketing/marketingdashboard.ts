import {Component, signal, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonModule} from 'primeng/skeleton';
import {SalesPerformanceWidget} from '@/pages/dashboards/marketing/components/salesperformancewidget';
import {InventoryManagementWidget} from '@/pages/dashboards/marketing/components/inventorymanagementwidget';
import {PromotionCampaignWidget} from '@/pages/dashboards/marketing/components/promotioncampaignwidget';
import {EmailDataChartWidget} from '@/pages/dashboards/marketing/components/emaildatachartwidget';
import {AudienceByGenderWidget} from "@/pages/dashboards/marketing/components/audiencebygenderwidget";
import {GlobalRankWidget} from "@/pages/dashboards/marketing/components/globalrankwidget";
import {VisitByDeviceWidget} from "@/pages/dashboards/marketing/components/visitbydevicewidget";
import {EmailHistoryWidget} from "@/pages/dashboards/marketing/components/emailhistorywidget";

@Component({
    selector: 'marketing-dashboard',
    standalone: true,
    imports: [CommonModule, SkeletonModule, SalesPerformanceWidget, InventoryManagementWidget, PromotionCampaignWidget, EmailDataChartWidget, AudienceByGenderWidget, GlobalRankWidget, VisitByDeviceWidget, EmailHistoryWidget],
    template: `
        <div class="flex flex-col gap-6">
            @if (loading()) {
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div class="p-4 border border-surface rounded-2xl bg-surface-0 dark:bg-surface-900 shadow-sm">
                        <p-skeleton width="30%" height="2rem" styleClass="mb-4"></p-skeleton>
                        <p-skeleton width="100%" height="20rem"></p-skeleton>
                    </div>
                    <div class="p-4 border border-surface rounded-2xl bg-surface-0 dark:bg-surface-900 shadow-sm">
                        <p-skeleton width="30%" height="2rem" styleClass="mb-4"></p-skeleton>
                        <p-skeleton width="100%" height="20rem"></p-skeleton>
                    </div>
                </div>
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div class="p-4 border border-surface rounded-2xl bg-surface-0 dark:bg-surface-900 shadow-sm" *ngFor="let i of [1,2,3]">
                        <p-skeleton shape="circle" size="4rem" styleClass="mb-4"></p-skeleton>
                        <p-skeleton width="80%" height="1.5rem" styleClass="mb-2"></p-skeleton>
                        <p-skeleton width="50%" height="1rem"></p-skeleton>
                    </div>
                </div>
            } @else {
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <sales-performance-widget/>
                    <inventory-management-widget/>
                    <promotion-campaign-widget/>
                    <email-data-chart-widget/>
                </div>
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <audience-by-gender-widget/>
                    <global-rank-widget/>
                    <visit-by-device-widget/>
                </div>
                <email-history-widget/>
            }
        </div>`
})
export class MarketingDashboard implements OnInit {
    loading = signal(true);

    ngOnInit() {
        setTimeout(() => {
            this.loading.set(false);
        }, 1500);
    }
}
