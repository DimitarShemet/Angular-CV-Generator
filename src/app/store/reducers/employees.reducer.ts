import { createReducer, on } from '@ngrx/store';
import { IEmployeesState } from 'src/app/shared/interfaces/employees-state.interface';
import * as EmployeesActions from '../actions/employees-actions';
const initialState: IEmployeesState = {
  employees: [],
};

export const employeesReducer = createReducer(
  initialState,
  on(EmployeesActions.employeesLoadedSuccess, (state, { employees }) => ({
    ...state,
    employees: employees,
  }))
);
