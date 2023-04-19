import { createReducer, on } from '@ngrx/store';
import { IResponsibilitiesState } from 'src/app/shared/interfaces/responsibilities-state';
import * as ResponsibilitiesActions from '../actions/responsibilities-actions';

const initialState: IResponsibilitiesState = {
  responsibilities: [],
};

export const responsibilitiesReducer = createReducer(
  initialState,
  on(
    ResponsibilitiesActions.getResponsibilitiesSuccess,
    (state, { responsibilities }) => ({
      ...state,
      responsibilities: [...responsibilities],
    })
  )
);
