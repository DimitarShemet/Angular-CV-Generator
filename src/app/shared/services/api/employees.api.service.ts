import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IEmployee,
  IEmployeeAttributes,
  IEmployeeDTO,
} from '../../interfaces/employee.interface';
import { FormatService } from '../format.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(private http: HttpClient, private formatService: FormatService) {}
  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployeeDTO[]>(environment.BACKEND_URL + '/api/users?populate=*')
      .pipe(
        map((employees) => {
          return this.formatService.formatEmployeesResponse(employees);
        })
      );
  }

  getEmployeeById(id: number): Observable<IEmployee> {
    return this.http
      .get<IEmployeeDTO>(
        environment.BACKEND_URL + '/api/users/' + id + '?populate=*'
      )
      .pipe(
        map((employee) => this.formatService.formatEmployeeResponse(employee))
      );
  }
  changeEmployee(id: number, employeeAttributes: IEmployeeAttributes) {
    return this.http
      .put<IEmployeeDTO>(
        environment.BACKEND_URL + '/api/users/' + id + '?populate=*',
        employeeAttributes
      )
      .pipe(map((elem) => this.formatService.formatEmployeeResponse(elem)));
  }
}
