import { ActionReducerMap } from '@ngrx/store';
import { IEmployeesState } from 'src/app/shared/interfaces/employees-state.interface';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';
import { IResponsibilitiesState } from 'src/app/shared/interfaces/responsibilities-state';
import { ISkillsState } from 'src/app/shared/interfaces/skills-state.interface';
import { employeesReducer } from './employees.reducer';
import { projectsReducer } from './projects.reducer';
import { responsibilitiesReducer } from './responsibilities.reducer';
import { skillsReducer } from './skills.reducer';

export interface AppState {
  projects: IProjectsState;
  employees: IEmployeesState;
  skills: ISkillsState;
  responsibilities: IResponsibilitiesState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  projects: projectsReducer,
  employees: employeesReducer,
  skills: skillsReducer,
  responsibilities: responsibilitiesReducer,
};
