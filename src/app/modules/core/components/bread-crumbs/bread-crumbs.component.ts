import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { IBreadCrumb } from './breadcrumb.interface';

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
            .getProjectById(+lastRoutePart)
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
    let label =
      route.routeConfig && route.routeConfig.data
        ? route.routeConfig.data['breadcrumb']
        : '';

    let path =
      route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = this.name;
    }
    console.log(url);
    const nextUrl = path ? `${url}/${path}` : url;
    const breadcrumb: IBreadCrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.label
      ? [...breadcrumbs, breadcrumb]
      : [...breadcrumbs];
    console.log(newBreadcrumbs);
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}
