import { createAction, props } from '@ngrx/store';
import {
  IProject,
  IProjectAttributes,
} from 'src/app/shared/interfaces/project.interface';

export const loadProjects = createAction('[Projects] Load Projects');

export const projectsLoadedSuccess = createAction(
  '[Projects] Projects Loaded Success',
  props<{ projects: IProject[] }>()
);
export const projectsLoadedError = createAction(
  '[Projects] Projects Loaded Error'
);

export const addProject = createAction(
  '[Projects] add Project',
  props<{ projectAttributes: IProjectAttributes }>()
);

export const projectAddedSuccess = createAction(
  '[Projects] Project added Success',
  props<{ project: IProject }>()
);

export const editProject = createAction(
  '[Projects] Edit Project',
  props<{ id: number; projectAttributes: IProjectAttributes }>()
);

// переписать на 15 версию ngrx
