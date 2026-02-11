import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);
    private titleService = inject(Title);

    constructor() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => {
                let route = this.activatedRoute.firstChild;
                while (route?.firstChild) {
                    route = route.firstChild;
                }
                return route?.snapshot.data['breadcrumb'] || 'is';
            })
        ).subscribe((title: string) => {
            this.titleService.setTitle(title);
        });
    }
}
