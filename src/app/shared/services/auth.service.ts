import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EXPIRES, JWTExpirationTime, TOKEN } from '../constants/token.consts';
import { ModulePath } from '../enums/routing-path.enums';
import { ILogInData } from '../interfaces/login-data.interface';
import { AuthApiService } from './api/auth.api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authApiService: AuthApiService, private router: Router) {}

  logIn(logInData: ILogInData) {
    this.authApiService.getToken(logInData).subscribe((response) => {
      localStorage.setItem(TOKEN, response.jwt);
      localStorage.setItem(EXPIRES, JSON.stringify(JWTExpirationTime));
      this.router.navigate([ModulePath.CoreFullPath]);
    });
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
