import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModulePath, PagePath } from 'src/app/shared/enums/routing-path.enums';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent {
  constructor(private router: Router) {}

  addProject() {
    this.router.navigate([
      ModulePath.ProjectsFullPath + PagePath.ProjectCreateFullPath,
    ]);
  }
}
