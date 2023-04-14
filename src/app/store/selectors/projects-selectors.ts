import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectsState } from 'src/app/shared/interfaces/projects-state.interface';

export const featureSelecetor =
  createFeatureSelector<IProjectsState>('projects');
export const projectsSelector = createSelector(
  featureSelecetor,
  (state) => state.projects
);
