import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { TOKEN } from '../../constants/storage.consts';
import { ILogInData } from '../../interfaces/login-data.interface';
import { ILogInResponse } from '../../interfaces/login-response.interface';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}
  decodeJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
  getToken(logInData: ILogInData) {
    this.http
      .post<ILogInResponse>(
        environment.BACKEND_URL + '/api/auth/local',
        logInData
      )
      .subscribe((response) => {
        localStorage.setItem(TOKEN, response.jwt);
      });
  }
}
