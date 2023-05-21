import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployee } from 'src/app/shared/interfaces/employee.interface';
import { IEmployeesState } from 'src/app/shared/interfaces/employees-state.interface';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';

export const featureSelecetor =
  createFeatureSelector<IEmployeesState>('employees');
export const employeesSelector = createSelector(
  featureSelecetor,
  (state) => state.employees
);
