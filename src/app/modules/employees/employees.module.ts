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
import { EmployeeFormComponent } from '../../shared/components/employee-form/employee-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from 'src/app/shared/components/tabs/tabs.component';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeeCreatePageComponent,
    EmployeeEditPageComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TableComponent,
    ProjectFormComponent,
    TranslateModule,
    NzButtonModule,
    ReactiveFormsModule,
    TabsComponent,
  ],
})
export class EmployeesModule {}
