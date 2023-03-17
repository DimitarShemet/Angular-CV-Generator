import { ActionReducerMap } from '@ngrx/store';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';
import { IEmployeesState } from 'src/app/shared/interfaces/employees-state.interface';
import { projectsReducer } from './projects.reducer';
import { employeesReducer } from './employees.reducer';

export interface AppState {
  projects: IProjectsState;
  employees: IEmployeesState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  projects: projectsReducer,
  employees: employeesReducer,
};
