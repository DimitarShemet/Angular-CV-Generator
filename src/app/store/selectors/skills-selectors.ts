import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISkillsState } from 'src/app/shared/interfaces/skills-state.interface';

export const featureSelecetor = createFeatureSelector<ISkillsState>('skills');
export const skillsSelector = createSelector(
  featureSelecetor,
  (state) => state.skills
);
