import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  EXPIRES,
  JWTExpirationTime,
  TOKEN,
} from '../../constants/token.consts';
import { ILogInData } from '../../interfaces/login-data.interface';
import { ILogInResponse } from '../../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  getToken(logInData: ILogInData): Observable<ILogInResponse> {
    return this.http.post<ILogInResponse>(
      environment.BACKEND_URL + '/api/auth/local',
      logInData
    );
  }
}
