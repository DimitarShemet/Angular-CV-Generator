import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { IEmployee } from '../interfaces/employee.interface';
import { EmployeesApiService } from '../services/api/employees.api.service';

@Injectable({ providedIn: 'root' })
export class EmployeeResolver implements Resolve<IEmployee> {
  constructor(private employeesApiService: EmployeesApiService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.employeesApiService.getEmployeeById(+route.params['id']);
  }
}
