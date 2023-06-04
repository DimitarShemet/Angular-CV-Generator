import { createAction, props } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import {
  IEmployee,
  IEmployeeAttributes,
} from 'src/app/shared/interfaces/employee.interface';

export const loadEmployees = createAction('[Employees Page] Load Employees ');

export const employeesLoadedSuccess = createAction(
  '[Employees Page] Employees Loaded Success',
  props<{ employees: IEmployee[] }>()
);

export const employeesLoadedError = createAction(
  '[Employees Page] Employees Loaded Error'
);

export const changeEmployeeInfo = createAction(
  '[Employee Change Info Tab]  Change Employee Info',
  props<{ id: number; employeeAttributes: IEmployeeAttributes }>()
);

export const employeeChangedInfoSuccess = createAction(
  '[Employee Change Info Tab] Employee Changed Info Success',
  props<{ employee: IEmployee }>()
);

export const employeeChangedInfoError = createAction(
  '[Employee Change Info  Tab] Employee Changed  Info Error'
);
export const changeEmployeeCv = createAction(
  '[Employee Change Cv Tab] Change Employee Cv',
  props<{ employeeId: number; cvs: ICv[] }>()
);
export const EmployeeChangedCvSuccess = createAction(
  '[Employee Change Cv Tab] Employee Cv Changed Success',
  props<{ employee: IEmployee }>()
);
export const employeeChangedCvError = createAction(
  '[Employee Change Cv Tab] Employee Cv  Changed Error'
);
