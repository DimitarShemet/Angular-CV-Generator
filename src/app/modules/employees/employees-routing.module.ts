import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';
import { EmployeeCreatePageComponent } from './pages/employee-create-page/employee-create-page.component';
import { EmployeeEditPageComponent } from './pages/employee-edit-page/employee-edit-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeResolver } from 'src/app/shared/resolvers/employee.resolver';

const routes: Routes = [
  {
    path: PagePath.Employees,
    component: EmployeesPageComponent,
    data: { breadCrumb: '' },
  },
  {
    path: PagePath.EmployeeCreate,
    component: EmployeeCreatePageComponent,
  },
  {
    path: PagePath.EmployeeEdit,
    component: EmployeeEditPageComponent,
    resolve: {
      employee: EmployeeResolver,
    },
  },
  {
    path: '**',
    redirectTo: PagePath.Employees,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
