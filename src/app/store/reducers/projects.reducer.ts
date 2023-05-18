import { createReducer, on } from '@ngrx/store';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';
import * as ProjectsActions from '../actions/projects-actions';

const initialState: IProjectsState = {
  projects: [],
};

export const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.projectsLoadedSuccess, (state, { projects }) => ({
    ...state,
    projects: projects,
  })),
  on(ProjectsActions.projectAddedSuccess, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project],
  })),

  on(ProjectsActions.projectChangedSuccess, (state, { project }) => {
    const updatedProjects = [...state.projects];
    const projectIndex = updatedProjects.findIndex(
      (elem) => elem.id === project.id
    );
    updatedProjects[projectIndex] = {
      ...project,
    };

    return {
      ...state,
      projects: updatedProjects,
    };
  })
);
