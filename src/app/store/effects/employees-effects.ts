import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesApiService } from 'src/app/shared/services/api/employees.api.service';
import * as EmployeesActions from '../actions/employees-actions';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

export const loadEmployees = createEffect(
  (
    actions$ = inject(Actions),
    employeesApiService = inject(EmployeesApiService)
  ) => {
    return actions$.pipe(
      ofType(EmployeesActions.loadEmployees),
      exhaustMap(() =>
        employeesApiService.getEmployees().pipe(
          map((employees) => {
            return EmployeesActions.employeesLoadedSuccess({
              employees: employees,
            });
          }),
          catchError(() => of(EmployeesActions.employeesLoadedError()))
        )
      )
    );
  },
  { functional: true }
);

export const changeEmployee = createEffect(
  (
    actions$ = inject(Actions),
    employeesApiService = inject(EmployeesApiService)
  ) => {
    return actions$.pipe(
      ofType(EmployeesActions.changeEmployee),
      exhaustMap((action) =>
        employeesApiService
          .changeEmployee(action.id, action.employeeAttributes)
          .pipe(
            map((employee) => {
              console.log(employee);
              return EmployeesActions.EmployeeChangedSuccess({
                employee: employee,
              });
            }),
            catchError(() => of(EmployeesActions.EmployeeChangedError()))
          )
      )
    );
  },
  { functional: true }
);
