import { createAction, props } from '@ngrx/store';
import { IOption } from 'src/app/shared/interfaces/common.interface';

export const getSkills = createAction('[Skills] Get Skills');

export const getSkillsSuccess = createAction(
  '[Skills] Get Skills Success',
  props<{ skills: IOption[] }>()
);
export const getSkillsError = createAction('[Skills] Get Skills Error');
