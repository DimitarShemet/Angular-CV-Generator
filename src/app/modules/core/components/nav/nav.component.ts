import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(
    private router: Router,
    private projectsApiService: ProjectsApiService
  ) {
    // console.log(this.router.url);
  }
  moduleName: string;
  routerInfo: string;
  ngOnInit() {
    // this.router.events
    //   .pipe(
    //     filter(
    //       (event): event is NavigationEnd => event instanceof NavigationEnd
    //     ),
    //     startWith(this.router)
    //   )
    //   .subscribe((val) => {
    //     // console.log(this.router.url);
    //     const moduleName = this.router.url.split('/').filter((elem) => elem)[0];
    //     this.moduleName = this.makeFirstLetterToUpperCase(moduleName);
    //     const lastRoutePart = this.router.url.split('/').pop();
    //     const isDynamicRoute = Boolean(Number(lastRoutePart));
    //     this.routerInfo = this.moduleName + ' list';
    //     if (isDynamicRoute) {
    //       this.projectsApiService
    //         // .getProjectById(+lastRoutePart)
    //         .getProjectById(40)
    //         .pipe(map((project: IProject) => project.attributes.name))
    //         .subscribe((projectName: string) => {
    //           this.routerInfo = projectName + ' info';
    //         });
    //     }
    //   });
  }
  makeFirstLetterToUpperCase(str: string) {
    const splitted = str.split('');
    const firstLetter = splitted[0].toUpperCase();
    splitted[0] = firstLetter;
    return splitted.join('');
  }
}
