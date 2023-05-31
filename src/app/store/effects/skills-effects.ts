import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { SkillsApiService } from 'src/app/shared/services/api/skills-api.service';
import * as SkillsActions from '../actions/skills-actions';

export const getSkills = createEffect(
  (actions$ = inject(Actions), skillsApiService = inject(SkillsApiService)) => {
    return actions$.pipe(
      ofType(SkillsActions.getSkills),
      exhaustMap((action) =>
        skillsApiService.getSkills().pipe(
          map((skillsResponsePayload) => {
            return SkillsActions.getSkillsSuccess({
              skills: skillsResponsePayload,
            });
          }),
          catchError(() => of(SkillsActions.getSkillsError()))
        )
      )
    );
  },
  { functional: true }
);
