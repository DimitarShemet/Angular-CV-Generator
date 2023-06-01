import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
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
    projectFormControl: [null],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedCv = this.employee.attributes.cvs[0];
    this.form.get('employeeFormControl').patchValue(this.selectedCv);
    this.form.get('projectFormControl').patchValue(this.selectedCv.projects[0]);
    this.form.statusChanges.subscribe((form) => {
      console.log(form);
    });
    this.form.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }

  selectCv(cv: ICv) {
    this.selectedCv = cv;
    this.form.get('employeeFormControl').patchValue(cv);
    this.form.get('projectFormControl').patchValue(cv.projects[0]);
  }

  selectProject(project: IProject) {
    this.form.get('projectFormControl').patchValue(project);
  }
}
