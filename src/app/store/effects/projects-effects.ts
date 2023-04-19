import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { ProjectsApiService } from 'src/app/shared/services/api/projects.api.service';
import * as ProjectsActions from '../actions/projects-actions';
import { FormatService } from 'src/app/shared/services/format.service';

// данные с сервера должны получать эффекты

export const loadProjects = createEffect(
  (
    actions$ = inject(Actions),
    projectsApiService = inject(ProjectsApiService)
  ) => {
    return actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      exhaustMap(() =>
        projectsApiService.getProjects().pipe(
          map((projects) => {
            return ProjectsActions.projectsLoadedSuccess({
              projects: projects,
            });
          }),
          catchError(() => of(ProjectsActions.projectsLoadedError()))
        )
      )
    );
  },
  { functional: true }
);

export const addProject = createEffect(
  (
    actions$ = inject(Actions),
    projectsApiService = inject(ProjectsApiService)
  ) => {
    return actions$.pipe(
      ofType(ProjectsActions.addProject),
      exhaustMap((action) => {
        console.log(action.projectAttributes);
        return projectsApiService.addProject(action.projectAttributes).pipe(
          map((response) => {
            console.log(response);
            return ProjectsActions.projectAddedSuccess({
              project: response,
            });
          }),
          catchError(() => of(ProjectsActions.projectAddedError()))
        );
      })
    );
  },
  { functional: true }
);

export const changeProject = createEffect(
  (
    actions$ = inject(Actions),
    projectsApiService = inject(ProjectsApiService)
  ) => {
    return actions$.pipe(
      ofType(ProjectsActions.changeProject),
      exhaustMap((action) => {
        console.log(action.projectAttributes);
        return projectsApiService
          .changeProject(action.id, action.projectAttributes)
          .pipe(
            map((response) => {
              console.log(response);
              return ProjectsActions.projectChangedSuccess({
                project: response,
              });
            }),
            catchError(() => of(ProjectsActions.projectChangedError()))
          );
      })
    );
  },
  { functional: true }
);
