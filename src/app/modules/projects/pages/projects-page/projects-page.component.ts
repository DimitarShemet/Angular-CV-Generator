import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModulePath, PagePath } from 'src/app/shared/enums/routing-path.enums';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { LoadProjects } from 'src/app/store/actions/projects-actions';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects: IProject[];

  constructor(
    private router: Router,
    private projectsApiService: ProjectsApiService,
    private store: Store
  ) {}

  ngOnInit() {
    this.projectsApiService.getProjects().subscribe((projects: IProject[]) => {
      this.projects = projects;
      this.store.dispatch(new LoadProjects({ projects: this.projects }));
    });
  }

  openProjectCreatePage() {
    this.router.navigate([
      ModulePath.ProjectsFullPath + PagePath.ProjectCreateFullPath,
    ]);
  }

  openProjectEditPage(id: number) {
    console.log(
      ModulePath.ProjectsFullPath + PagePath.ProjectEditFullPath + id
    );
    this.router.navigate([
      ModulePath.ProjectsFullPath + PagePath.ProjectEditFullPath + id,
    ]);
  }
}
