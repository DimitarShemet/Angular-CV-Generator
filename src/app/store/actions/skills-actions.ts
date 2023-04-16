import { createAction, props } from '@ngrx/store';
import { ISelectOptions } from 'src/app/shared/interfaces/label-options.interface';
import { ISkills } from 'src/app/shared/interfaces/skills.interface';
export const getSkills = createAction('[Skills] Get Skills');

export const getSkillsSuccess = createAction(
  '[Skills] Get Skills Success',
  props<{ skills: ISelectOptions }>()
);
export const getSkillsError = createAction('[Skills] Get Skills Error');
