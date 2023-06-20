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

export const changeEmployeeInfo = createEffect(
  (
    actions$ = inject(Actions),
    employeesApiService = inject(EmployeesApiService)
  ) => {
    return actions$.pipe(
      ofType(EmployeesActions.changeEmployeeInfo),
      exhaustMap((action) =>
        employeesApiService
          .changeEmployeeInfo(action.id, action.employeeAttributes)
          .pipe(
            map((employee) => {
              console.log(employee);
              return EmployeesActions.employeeChangedInfoSuccess({
                employee: employee,
              });
            }),
            catchError(() => of(EmployeesActions.employeeChangedInfoError()))
          )
      )
    );
  },
  { functional: true }
);

export const changeEmployeeCv = createEffect(
  (
    actions$ = inject(Actions),
    employeesApiService = inject(EmployeesApiService)
  ) => {
    return actions$.pipe(
      ofType(EmployeesActions.changeEmployeeCv),
      exhaustMap((action) =>
        employeesApiService
          .changeEmployeeCv(action.employeeId, action.cvs)
          .pipe(
            map((employeeAttributes) => {
              console.log(employeeAttributes);
              return EmployeesActions.EmployeeChangedCvSuccess({
                employee: {
                  id: employeeAttributes.id,
                  attributes: employeeAttributes,
                },
              });
            }),
            catchError(() => of(EmployeesActions.employeeChangedCvError()))
          )
      )
    );
  },
  { functional: true }
);

export const createEmployee = createEffect(
  (
    actions$ = inject(Actions),
    employeesApiService = inject(EmployeesApiService)
  ) => {
    return actions$.pipe(
      ofType(EmployeesActions.createEmployee),
      exhaustMap((action) =>
        employeesApiService.createEmployee(action.employeeAttributes).pipe(
          map((employeeAttributes) => {
            console.log(employeeAttributes);
            return EmployeesActions.EmployeeChangedCvSuccess({
              employee: {
                id: employeeAttributes.id,
                attributes: employeeAttributes,
              },
            });
          }),
          catchError(() => of(EmployeesActions.employeeChangedCvError()))
        )
      )
    );
  },
  { functional: true }
);
