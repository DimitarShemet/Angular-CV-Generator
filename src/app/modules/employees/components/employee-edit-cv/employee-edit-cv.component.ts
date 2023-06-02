import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { EmployeeFormComponent } from '../../../../shared/components/employee-form/employee-form.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
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
  ],
})
export class EmployeeEditCvComponent implements OnInit {
  @Input() employee: IEmployee;
  selectedCv: ICv;
  employeesPagePath = ModulePath.EmployeesFullPath;
  form = this.fb.group({
    employeeFormControl: [null],
    projects: this.fb.array([]),
  });

  get projects() {
    return this.form.controls.projects as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedCv = this.employee.attributes.cvs[0];
    this.form.controls.employeeFormControl.patchValue(this.selectedCv);
    this.selectedCv.projects.forEach((elem) =>
      this.projects.push(this.fb.control(''))
    );
    this.projects.patchValue(this.selectedCv.projects);
    // this.form.statusChanges.subscribe((form) => {
    //   console.log(form);
    // });
    // this.form.valueChanges.subscribe((form) => {
    //   console.log(form);
    // });
  }

  selectCv(cv: ICv) {
    this.selectedCv = cv;
    this.form.controls.employeeFormControl.patchValue(cv);
    this.projects.clear();
    cv.projects.forEach(() => this.projects.push(this.fb.control('')));
    this.form.controls.projects.patchValue(cv.projects);
  }

  selectProject(project: IProject) {}

  addProject() {
    this.projects.push(this.fb.control('', Validators.required));
  }

  deleteProject(index: number) {
    this.projects.removeAt(index);
  }
}
