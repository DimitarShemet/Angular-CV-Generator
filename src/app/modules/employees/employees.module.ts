import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { TabsComponent } from 'src/app/shared/components/tabs/tabs.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeCreatePageComponent } from './pages/employee-create-page/employee-create-page.component';
import { EmployeeEditPageComponent } from './pages/employee-edit-page/employee-edit-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

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
