import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../../interfaces/employee.interface';
import { FormatService } from '../format.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(private http: HttpClient, private formatService: FormatService) {}
  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(environment.BACKEND_URL + '/api/users?populate=*')
      .pipe(
        map((employees) => {
          console.log(employees);
          return this.formatService.formatEmployeesResponse(employees);
        })
      );
  }
}
