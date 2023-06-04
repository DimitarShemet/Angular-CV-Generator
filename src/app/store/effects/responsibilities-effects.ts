import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ResponsibilitiesApiService } from 'src/app/shared/services/api/responsibilities-api.service';
import * as ResponsibilitiesActions from '../actions/responsibilities-actions';
export const getResponsibilities = createEffect(
  (
    actions$ = inject(Actions),
    responsibilitiesApiService = inject(ResponsibilitiesApiService)
  ) => {
    return actions$.pipe(
      ofType(ResponsibilitiesActions.getResponsibilities),
      exhaustMap(() =>
        responsibilitiesApiService.getResponsibilities().pipe(
          map((responsibilitiesResponsePayload) => {
            return ResponsibilitiesActions.getResponsibilitiesSuccess({
              responsibilities: responsibilitiesResponsePayload,
            });
          }),
          catchError(() =>
            of(ResponsibilitiesActions.getResponsibilitiesError())
          )
        )
      )
    );
  },
  { functional: true }
);
