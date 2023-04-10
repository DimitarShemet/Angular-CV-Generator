import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';
import { IBreadCrumb } from './breadcrumb.interface';
import { filter, map, startWith } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { projectsSelector } from 'src/app/store/reducers/projects.reducer';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { IProject } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss'],
})
export class BreadcrumbComponents implements OnInit {
  public breadcrumbs: IBreadCrumb[];
  name: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectsApiService: ProjectsApiService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        startWith(this.router)
      )
      .subscribe(() => {
        const lastRoutePart = this.router.url.split('/').pop();
        const isDynamicRoute = Boolean(Number(lastRoutePart));
        if (isDynamicRoute) {
          this.projectsApiService
            .getProject(+lastRoutePart)
            .pipe(map((project: IProject) => project.attributes.name))
            .subscribe((projectName: string) => {
              this.name = projectName;

              this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
            });
        } else {
          this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        }
      });
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadCrumb[] = []
  ): IBreadCrumb[] {
    //If no routeConfig is avalailable we are on the root path

    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data['breadcrumb']
        : '';
    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = this.name;
    }

    //In the routeConfig the complete path is not available,
    //so we rebuild it each time
    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    if (route.firstChild) {
      //If we are not on our current path yet,
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
