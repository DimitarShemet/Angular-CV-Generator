import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { FormDirective } from 'src/app/shared/directives/focus-invalid-field.directive';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import {
  changeEmployeeCv,
  loadEmployees,
} from 'src/app/store/actions/employees-actions';
import { EmployeeFormComponent } from '../../../../shared/components/employee-form/employee-form.component';
@Component({
  selector: 'app-employee-edit-cv',
  templateUrl: './employee-edit-cv.component.html',
  styleUrls: ['./employee-edit-cv.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    EmployeeFormComponent,
    ProjectFormComponent,
    ReactiveFormsModule,
    NzTabsModule,
    NzIconModule,
    NzCollapseModule,
    NzButtonModule,
    RouterModule,
    FormDirective,
  ],
})
export class EmployeeEditCvComponent implements OnInit {
  @Input() employee: IEmployee;
  cvs: ICv[];
  selectedCv: ICv;
  employeesPagePath = ModulePath.EmployeesFullPath;
  form = this.fb.group({
    employee: [null],
    projects: this.fb.array([]),
  });

  get projectsForm() {
    return this.form.controls.projects as FormArray;
  }

  get employeeForm() {
    return this.form.controls.employee as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.cvs = this.employee.attributes.cvs;
    this.selectedCv = this.employee.attributes.cvs[0];
    this.employeeForm.patchValue(this.selectedCv);
    this.selectedCv.projects.forEach(() =>
      this.projectsForm.push(this.fb.control(''))
    );
    this.projectsForm.patchValue(this.selectedCv.projects);
  }

  selectCv(cv: ICv) {
    this.selectedCv = cv;
    this.employeeForm.patchValue(cv);
    this.projectsForm.clear();
    cv.projects.forEach(() => this.projectsForm.push(this.fb.control('')));
    this.form.controls.projects.patchValue(cv.projects);
  }

  addProject() {
    // this.projects.push(this.fb.control('', Validators.required));
  }

  deleteProject(index: number) {
    this.projectsForm.removeAt(index);
  }

  deleteCv(id: number) {
    const newCvs = [...this.cvs];
    this.cvs = newCvs.filter((elem) => elem.id !== id);
  }

  submitForm() {
    const newCvs = [...this.cvs];
    console.log(newCvs);
    const currentCvIndex = newCvs.findIndex(
      (elem) => elem.id === this.selectedCv.id
    );
    console.log(currentCvIndex);
    newCvs[currentCvIndex] = {
      id: this.selectedCv.id,
      name: this.selectedCv.name,
      ...this.employeeForm.value,
      projects: [...this.projectsForm.value],
    };
    this.store.dispatch(
      changeEmployeeCv({
        employeeId: this.employee.id,
        cvs: newCvs,
      })
    );
    this.router.navigate([this.employeesPagePath]);
  }
}
