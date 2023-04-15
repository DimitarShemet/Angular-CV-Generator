import { createAction, props } from '@ngrx/store';
import {
  IProject,
  IProjectAttributes,
} from 'src/app/shared/interfaces/project.interface';

export const loadProjects = createAction('[Projects Page] Load Projects');

export const projectsLoadedSuccess = createAction(
  '[Projects Page] Projects Loaded Success',
  props<{ projects: IProject[] }>()
);
export const projectsLoadedError = createAction(
  '[Projects Page] Projects Loaded Error'
);

export const addProject = createAction(
  '[ProjectCreate Page] add Project',
  props<{ projectAttributes: IProjectAttributes }>()
);

export const projectAddedSuccess = createAction(
  '[ProjectCreate Page] Project Added Success',
  props<{ project: IProject }>()
);

export const projectAddedError = createAction(
  '[ProjectCreate Page] Project Added Error'
);

export const changeProject = createAction(
  '[ProjectChange Page] Change Project',
  props<{ id: number; projectAttributes: IProjectAttributes }>()
);

export const projectChangedSuccess = createAction(
  '[ProjectChange Page] Project Changed Success',
  props<{ project: IProject }>()
);

export const projectChangedError = createAction(
  '[ProjectChange Page] Project  Changed Error'
);

// переписать на 15 версию ngrx
