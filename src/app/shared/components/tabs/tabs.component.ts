import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { Observable } from 'rxjs';
import { EmployeeEditCvComponent } from 'src/app/modules/employees/components/employee-edit-cv/employee-edit-cv.component';
import { EmployeeFormComponent } from 'src/app/shared/components/employee-form/employee-form.component';
import {
  changeEmployeeInfo,
  createEmployee,
  loadEmployees,
} from 'src/app/store/actions/employees-actions';
import { employeesSelector } from 'src/app/store/selectors/employees-selectors';
import { ModulePath } from '../../enums/routing-path.enums';
import { IEmployee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [
    NzTabsModule,
    CommonModule,
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
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  employee?: IEmployee;
  employeesPagePath = ModulePath.EmployeesFullPath;
  employees: Observable<IEmployee[]> = this.store.select(employeesSelector);

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.employeeForm.valueChanges.subscribe((elem) => {
      console.log(elem);
    });

    this.route.data.subscribe((data) => {
      data['employee'] &&
        this.employeeForm
          .get('employeeFormControl')
          .patchValue(data['employee'].attributes);
      this.employee = data['employee'];
    });
  }

  submitEmployeeForm() {
    const formValue = this.employeeForm.controls.employeeFormControl.value;
    console.log(formValue);
    this.employee
      ? this.store.dispatch(
          changeEmployeeInfo({
            id: this.employee.id,
            employeeAttributes: formValue,
          })
        )
      : this.store.dispatch(
          createEmployee({
            employeeAttributes: {
              ...formValue,
              username: formValue?.firstName,
            },
          })
        );
    this.router.navigate([this.employeesPagePath]);
  }
}
