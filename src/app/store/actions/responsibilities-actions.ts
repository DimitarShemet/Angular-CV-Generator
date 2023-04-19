import { createAction, props } from '@ngrx/store';
import { IOption } from 'src/app/shared/interfaces/common.interface';

export const getResponsibilities = createAction(
  '[Responsibilities] Get Responsibilities'
);

export const getResponsibilitiesSuccess = createAction(
  '[Responsibilities] Get Responsibilities Success',
  props<{ responsibilities: IOption[] }>()
);

export const getResponsibilitiesError = createAction(
  '[Responsibilities] Get Responsibilities Error'
);
