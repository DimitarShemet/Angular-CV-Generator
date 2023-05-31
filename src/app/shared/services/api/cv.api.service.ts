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
import { ICv } from '../../interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class CvApiService {
  constructor(private http: HttpClient) {}
  getCvs(): Observable<ICv[]> {
    return this.http
      .get<any>(environment.BACKEND_URL + '/api/cvs?populate=*')
      .pipe(
        map((employees) => {
          console.log(employees);
          return employees;
        })
      );
  }
}
