import { Component, Input, OnInit } from '@angular/core';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { CvApiService } from 'src/app/shared/services/api/cv.api.service';
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
  ],
})
export class EmployeeEditCvComponent implements OnInit {
  @Input() employee: IEmployee;
  selectedCv: ICv;

  form = this.fb.group({
    employeeFormControl: [null],
    projectFormControl: [null],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.selectedCv = this.employee.attributes.cvs[0];
    this.form.get('employeeFormControl').patchValue(this.selectedCv);
    this.form.get('projectFormControl').patchValue(this.selectedCv.projects[0]);
  }

  selectCv(index: number) {
    this.selectedCv = this.employee.attributes.cvs.find(
      (elem, ind) => ind === index
    );
    console.log(this.selectedCv);
    this.form.get('employeeFormControl').patchValue(this.selectedCv);
    this.form.get('projectFormControl').patchValue(this.selectedCv.projects[0]);
  }
}
