import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IEmployeesState } from 'src/app/shared/interfaces/employees-state.interface';

const initialState: IEmployeesState = {
  employees: [],
};

export const employeesReducer = (
  state: IEmployeesState = initialState
  // action: ToDoActions
): IEmployeesState => {
  // switch (action.type) {
  //   default:
  return state;
  // }
};
