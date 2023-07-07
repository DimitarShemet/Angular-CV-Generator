import { FormArray, FormControl } from '@angular/forms';
import { IEmployee, IEmployeeAttributes } from './employee.interface';
import { IProject } from './project.interface';

export interface ICvForm {
  employee: FormControl<IEmployeeAttributes>;
  projects: FormArray<FormControl<IProject>>;
  selectedProject: FormControl<number>;
}
