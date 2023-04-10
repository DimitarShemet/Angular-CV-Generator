import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectEditPageComponent } from './pages/project-edit-page/project-edit-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectResolver } from 'src/app/shared/resolvers/project.resolver';

const routes: Routes = [
  {
    path: PagePath.Projects,
    component: ProjectsPageComponent,
  },
  {
    path: PagePath.ProjectCreate,
    component: ProjectCreatePageComponent,
    data: { breadcrumb: 'Create' },
  },
  {
    path: PagePath.ProjectEdit,
    component: ProjectEditPageComponent,
    data: { breadcrumb: '' },
    resolve: {
      project: ProjectResolver,
    },
  },
  {
    path: '**',
    redirectTo: PagePath.Projects,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
