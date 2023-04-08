import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';
import {
  ProjectsActions,
  ProjectsActionsTypes,
} from '../actions/projects-actions';

const initialState: IProjectsState = {
  projects: [],
};

export const projectsReducer = (
  state: IProjectsState = initialState,
  action: ProjectsActions
): IProjectsState => {
  switch (action.type) {
    case ProjectsActionsTypes.AddProject:
      return {
        ...state,
        projects: [...state.projects, action.payload.project],
      };

    case ProjectsActionsTypes.LoadProjects:
      return {
        ...state,
        projects: [...action.payload.projects],
      };

    default:
      return state;
  }
};

export const featureSelecetor =
  createFeatureSelector<IProjectsState>('projects');
export const projectsSelector = createSelector(
  featureSelecetor,
  (state) => state.projects
);
