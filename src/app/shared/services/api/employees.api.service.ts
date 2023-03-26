import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(private http: HttpClient) {}
  getEmployees() {
    this.http
      .get(environment.BACKEND_URL + '/api/users')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
