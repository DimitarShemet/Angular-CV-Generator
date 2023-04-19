import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResponsibilitiesState } from 'src/app/shared/interfaces/responsibilities-state';

export const featureSelecetor =
  createFeatureSelector<IResponsibilitiesState>('responsibilities');
export const responsibilitiesSelector = createSelector(
  featureSelecetor,
  (state) => state.responsibilities
);
