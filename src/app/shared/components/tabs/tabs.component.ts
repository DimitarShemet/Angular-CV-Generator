import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { EmployeeEditCvComponent } from 'src/app/modules/employees/components/employee-edit-cv/employee-edit-cv.component';
import { EmployeeEditInfoComponent } from 'src/app/modules/employees/components/employee-edit-info/employee-edit-info.component';
import { EmployeeFormComponent } from 'src/app/modules/employees/components/employee-form/employee-form.component';
import { changeEmployee } from 'src/app/store/actions/employees-actions';
import { ModulePath } from '../../enums/routing-path.enums';
import { ICv } from '../../interfaces/cv.interface';
import { IEmployee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    NzTabsModule,
    CommonModule,
    EmployeeEditInfoComponent,
    EmployeeEditCvComponent,
    EmployeeFormComponent,
    ReactiveFormsModule,
    NzButtonModule,
    RouterModule,
  ],
})
export class TabsComponent implements OnInit {
  employeeForm = this.fb.group({
    employeeFormControl: [null],
  });

  employee: IEmployee;
  employeesPagePath = ModulePath.EmployeesFullPath;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.employeeForm
        .get('employeeFormControl')
        .patchValue(data['employee'].attributes);
      this.employee = data['employee'];
    });
  }
  submitEmployeeForm() {
    const formValue = this.employeeForm.controls.employeeFormControl.value;
    this.store.dispatch(
      changeEmployee({ id: this.employee.id, employeeAttributes: formValue })
    );
    this.router.navigate([this.employeesPagePath]);
  }
}
