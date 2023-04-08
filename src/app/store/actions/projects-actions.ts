import { Action } from '@ngrx/store';
import { IProject } from 'src/app/shared/interfaces/project-data.interface';

export enum ProjectsActionsTypes {
  AddProject = '[Projects] add Project',
  LoadProjects = '[Projects] Load Projects',
}
export class LoadProjects implements Action {
  readonly type = ProjectsActionsTypes.LoadProjects;
  constructor(public payload: { projects: IProject[] }) {}
}

export class AddProject implements Action {
  readonly type = ProjectsActionsTypes.AddProject;
  constructor(public payload: { project: IProject }) {}
}

export type ProjectsActions = AddProject | LoadProjects;
