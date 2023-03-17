import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeCreatePageComponent } from './pages/employee-create-page/employee-create-page.component';
import { EmployeeEditPageComponent } from './pages/employee-edit-page/employee-edit-page.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { EmployeeEditInfoComponent } from './components/employee-edit-info/employee-edit-info.component';
import { EmployeeEditCvComponent } from './components/employee-edit-cv/employee-edit-cv.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeeCreatePageComponent,
    EmployeeEditPageComponent,
    EmployeeEditInfoComponent,
    EmployeeEditCvComponent,
    EmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TableComponent,
    ProjectFormComponent,
    TranslateModule,
  ],
})
export class EmployeesModule {}
