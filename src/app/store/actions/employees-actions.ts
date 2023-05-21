import { createAction, props } from '@ngrx/store';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';

export const loadEmployees = createAction('[Employees Page] Load Employees ');

export const employeesLoadedSuccess = createAction(
  '[Employees Page] Employees Loaded Success',
  props<{ employees: IEmployee[] }>()
);

export const employeesLoadedError = createAction(
  '[Employees Page] Employees Loaded Error'
);
