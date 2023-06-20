import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
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
  createEmployee,
  loadEmployees,
} from 'src/app/store/actions/employees-actions';
import { EmployeeFormComponent } from '../../../../shared/components/employee-form/employee-form.component';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ISkills } from 'src/app/shared/interfaces/skills.interface';
import { EmployeeService } from 'src/app/shared/services/employee.service';
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
  animations: [
    trigger('deleteProject', [
      state('start', style({ opacity: 1 })),
      state('end', style({ opacity: 1 })),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class EmployeeEditCvComponent implements OnInit {
  @Input() employee?: IEmployee;
  cvs?: ICv[];
  selectedCv: ICv;
  employeesPagePath = ModulePath.EmployeesFullPath;
  projectState: string;
  form = this.fb.group({
    employee: [null],
    projects: this.fb.array([]),
  });
  tabIndex = 0;

  get projectsForm() {
    return this.form.controls.projects as FormArray;
  }

  get employeeForm() {
    return this.form.controls.employee as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.cvs = this.employee?.attributes.cvs;
    this.selectedCv = this.employee?.attributes.cvs?.[0];
    this.employeeForm.patchValue(this.selectedCv);
    this.selectedCv?.projects.forEach(() =>
      this.projectsForm.push(this.fb.control(''))
    );
    this.projectsForm?.patchValue(this.selectedCv?.projects);
  }

  selectCv(cv: ICv) {
    this.selectedCv = cv;
    this.employeeForm.patchValue(cv);
    this.projectsForm.clear();
    cv.projects.forEach(() => this.projectsForm.push(this.fb.control('')));
    this.form.controls.projects.patchValue(cv.projects);
  }

  addProject() {
    this.projectsForm.push(this.fb.control(''));
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
    this.employee
      ? this.store.dispatch(
          changeEmployeeCv({
            employeeId: this.employee?.id,
            cvs: newCvs,
          })
        )
      : this.store.dispatch(
          createEmployee({
            employeeAttributes: {
              ...this.form.controls.employee.value,
              cvs: newCvs,
            },
          })
        );
    this.router.navigate([this.employeesPagePath]);
  }
  addCv() {
    console.log(this.cvs);
    const newId = this.employeeService.getNewId(this.cvs);
    const newCv = {
      id: newId,
      name: 'new CV',
      firstName: '',
      lastName: '',
      description: '',
      email: '',
      skills: [] as ISkills,
      projects: [] as IProject[],
    };
    const newCvs = this.cvs ? [...this.cvs, newCv] : [newCv];
    const lastCvIndex = newCvs.length - 1;
    this.cvs = newCvs;
    this.selectCv(newCvs[lastCvIndex]);
    this.tabIndex = lastCvIndex;
  }
}
