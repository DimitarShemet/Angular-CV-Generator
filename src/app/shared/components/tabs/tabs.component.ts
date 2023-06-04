import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { EmployeeEditCvComponent } from 'src/app/modules/employees/components/employee-edit-cv/employee-edit-cv.component';
import { EmployeeEditInfoComponent } from 'src/app/modules/employees/components/employee-edit-info/employee-edit-info.component';
import { EmployeeFormComponent } from 'src/app/shared/components/employee-form/employee-form.component';
import {
  changeEmployeeInfo,
  loadEmployees,
} from 'src/app/store/actions/employees-actions';
import { ModulePath } from '../../enums/routing-path.enums';
import { ICv } from '../../interfaces/cv.interface';
import { IEmployee } from '../../interfaces/employee.interface';
import { Observable } from 'rxjs';
import { employeesSelector } from 'src/app/store/selectors/employees-selectors';

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
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}
  employee: IEmployee;
  employeesPagePath = ModulePath.EmployeesFullPath;
  employees: Observable<IEmployee[]> = this.store.select(employeesSelector);
  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
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
      changeEmployeeInfo({
        id: this.employee.id,
        employeeAttributes: formValue,
      })
    );
    this.router.navigate([this.employeesPagePath]);
  }
}
