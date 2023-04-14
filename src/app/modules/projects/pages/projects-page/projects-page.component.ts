import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModulePath, PagePath } from 'src/app/shared/enums/routing-path.enums';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { FormatService } from 'src/app/shared/services/format.service';
import { loadProjects } from 'src/app/store/actions/projects-actions';
import { projectsSelector } from 'src/app/store/selectors/projects-selectors';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  projects$: Observable<IProject[]> = this.store.select(projectsSelector);
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadProjects());
  }

  openProjectCreatePage() {
    this.router.navigate([
      ModulePath.ProjectsFullPath + PagePath.ProjectCreateFullPath,
    ]);
  }

  openProjectEditPage(id: number) {
    this.router.navigate([
      ModulePath.ProjectsFullPath + PagePath.ProjectEditFullPath + id,
    ]);
  }
}
