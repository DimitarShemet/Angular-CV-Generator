import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogInData } from '../../interfaces/login-data.interface';
import { ILogInResponse } from '../../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}
  getToken(logInData: ILogInData) {
    this.http
      .post<ILogInResponse>('http://localhost:1337/api/auth/local', logInData)
      .subscribe((response) => localStorage.setItem('JWT', response.jwt));
  }
}
