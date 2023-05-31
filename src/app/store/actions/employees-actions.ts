import { createAction, props } from '@ngrx/store';
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

export const changeEmployee = createAction(
  '[Employee Change Page]  Change Employee',
  props<{ id: number; employeeAttributes: IEmployeeAttributes }>()
);

export const EmployeeChangedSuccess = createAction(
  '[Employee Change Page] Employee Changed Success',
  props<{ employee: IEmployee }>()
);

export const EmployeeChangedError = createAction(
  '[Employee Change Page]   Employee Changed Error'
);
