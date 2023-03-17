import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulePath, PagePath } from 'src/app/shared/enums/routing-path.enums';
import { CorePageComponent } from './pages/core-page/core-page.component';

const routes: Routes = [
  {
    path: PagePath.Core,
    component: CorePageComponent,
    children: [
      {
        path: ModulePath.Dashboard,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: ModulePath.Employees,
        loadChildren: () =>
          import('../employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
      },
      {
        path: ModulePath.Projects,
        loadChildren: () =>
          import('../projects/projects.module').then((m) => m.ProjectsModule),
      },
      { path: '**', redirectTo: ModulePath.Projects },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
