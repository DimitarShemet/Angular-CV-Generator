import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { Observable, map } from 'rxjs';
import { addRemoveProject } from 'src/app/shared/animations/animations';
import { SelectComponent } from 'src/app/shared/components/controls/select/select.component';
import { ProjectFormComponent } from 'src/app/shared/components/project-form/project-form.component';
import { FormDirective } from 'src/app/shared/directives/focus-invalid-field.directive';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import { IOption } from 'src/app/shared/interfaces/common.interface';
import { ICvForm } from 'src/app/shared/interfaces/cv-form.interface';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import {
  changeEmployeeCv,
  createEmployee,
  loadEmployees,
} from 'src/app/store/actions/employees-actions';
import { loadProjects } from 'src/app/store/actions/projects-actions';
import { projectsSelector } from 'src/app/store/selectors/projects-selectors';
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
    FormsModule,
    SelectComponent,
  ],
  animations: [addRemoveProject],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeEditCvComponent implements OnInit {
  projects: IProject[];

  cvs?: ICv[];
  selectedCv: ICv;
  employeesPagePath = ModulePath.EmployeesFullPath;
  form = this.fb.group<ICvForm>({
    employee: null,
    projects: this.fb.array<IProject>([]),
    selectedProject: null,
  });

  tabIndex = 0;

  get projectsForm() {
    return this.form.controls.projects as FormArray;
  }

  get employeeForm() {
    return this.form.controls.employee as FormControl;
  }
  get selectedProject() {
    return this.form.controls.selectedProject;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private employeeService: EmployeeService,
    private projectsApiService: ProjectsApiService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @Input() employee?: IEmployee;
  projectsOption$: Observable<IOption[]>;

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
    this.store.dispatch(loadProjects());
    this.cvs = this.employee?.attributes.cvs;
    this.selectedCv = this.employee?.attributes.cvs?.[0];
    this.employeeForm.patchValue(this.selectedCv);
    this.selectedCv?.projects.forEach(() =>
      this.projectsForm.push(this.fb.control(''))
    );
    this.projectsForm?.patchValue(this.selectedCv?.projects);
    this.projectsOption$ = this.store.select(projectsSelector).pipe(
      map((projects) => {
        return projects.map((proj) => ({
          label: proj.attributes.name,
          value: proj.id,
        }));
      })
    );
    this.store.select(projectsSelector).subscribe((projects) => {
      this.projects = projects;
    });
  }

  selectCv(cv: ICv) {
    this.selectedCv = cv;
    this.employeeForm.patchValue(cv);
    this.projectsForm.clear();
    cv.projects.forEach(() => this.projectsForm.push(this.fb.control('')));
    this.form.controls.projects.patchValue(cv.projects);
  }

  addProject() {
    console.log(this.projectsForm.controls);
    const selectedProjectId = this.selectedProject?.value;
    console.log(selectedProjectId);
    if (selectedProjectId) {
      this.projectsApiService
        .getProjectById(selectedProjectId)
        .subscribe((project) => {
          this.projectsForm.push(this.fb.control(project.attributes));
          console.log(this.projectsForm.controls);
          this.changeDetectorRef.markForCheck();
        });
      this.selectedProject.reset();
      return;
    }
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
              ...this.form.controls.employee?.value,
              cvs: newCvs,
            },
          })
        );
    this.router.navigate([this.employeesPagePath]);
  }
  addCv() {
    const newCvs = this.employeeService.getNewCvs(this.cvs);
    const lastCvIndex = newCvs.length - 1;
    this.cvs = newCvs;
    this.selectCv(newCvs[lastCvIndex]);
    this.tabIndex = lastCvIndex;
  }
}
