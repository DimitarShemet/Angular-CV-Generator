import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';

const initialState: IProjectsState = {
  projects: [],
};

export const projectsReducer = (
  state: IProjectsState = initialState
  // action: ToDoActions
): IProjectsState => {
  // switch (action.type) {
  //   default:
  return state;
  // }
};
