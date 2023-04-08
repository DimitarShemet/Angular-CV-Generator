import { Action } from '@ngrx/store';
import {
  IProject,
  IProjectAttributes,
} from 'src/app/shared/interfaces/project.interface';

export enum ProjectsActionsTypes {
  LoadProjects = '[Projects] Load Projects',
  AddProject = '[Projects] add Project',
  EditProject = '[Projects] Edit Project',
}
export class LoadProjects implements Action {
  readonly type = ProjectsActionsTypes.LoadProjects;
  constructor(public payload: { projects: IProject[] }) {}
}

export class AddProject implements Action {
  readonly type = ProjectsActionsTypes.AddProject;
  constructor(public payload: { project: IProject }) {}
}

export class EditProject implements Action {
  readonly type = ProjectsActionsTypes.EditProject;
  constructor(
    public payload: { id: number; projectAttributes: IProjectAttributes }
  ) {}
}

export type ProjectsActions = AddProject | LoadProjects | EditProject;
