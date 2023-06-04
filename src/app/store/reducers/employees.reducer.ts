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
  })),

  on(EmployeesActions.EmployeeChangedCvSuccess, (state, { employee }) => {
    // const updatedEmployees = [...state.employees];
    // const employeeIndex =
    //   updatedEmployees.findIndex((elem) => elem.id === employee.id) + 1;
    // console.log(employeeIndex);
    // updatedEmployees[employeeIndex] = {
    //   ...employee,
    // };

    return {
      ...state,
      employees: [employee],
    };
  })
);
