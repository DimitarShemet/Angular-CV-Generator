import { Injectable } from '@angular/core';
import { EXPIRES, TOKEN } from '../constants/token.consts';
import { ILogInData } from '../interfaces/login-data.interface';
import { AuthApiService } from './api/auth.api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authApiService: AuthApiService) {}

  logIn(logInData: ILogInData) {
    this.authApiService.getToken(logInData);
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem(TOKEN));
  }

  JWTIsActual() {
    const expitationTime = JSON.parse(localStorage.getItem(EXPIRES)) as number;
    return expitationTime > Date.now();
  }

  get isUserHasAccess(): boolean {
    return this.isAuthenticated() && this.JWTIsActual();
  }
}
