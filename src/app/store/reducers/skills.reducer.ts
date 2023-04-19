import { createReducer, on } from '@ngrx/store';
import * as SkillsActions from '../actions/skills-actions';
import { ISkillsState } from 'src/app/shared/interfaces/skills-state.interface';

const initialState: ISkillsState = {
  skills: [],
};

export const skillsReducer = createReducer(
  initialState,
  on(SkillsActions.getSkillsSuccess, (state, { skills }) => ({
    ...state,
    skills: [...skills],
  }))
);
