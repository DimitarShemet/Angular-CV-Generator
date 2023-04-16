import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  EXPIRES,
  JWT_EXPIRATION_TIME,
  TOKEN_KEY,
} from '../constants/token.consts';
import { ModulePath } from '../enums/routing-path.enums';
import { IAuthResponseData } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  logIn(authResponseData: IAuthResponseData) {
    localStorage.setItem(TOKEN_KEY, authResponseData.jwt);
    localStorage.setItem(EXPIRES, JSON.stringify(JWT_EXPIRATION_TIME));
    this.router.navigate([ModulePath.CoreFullPath]);
  }

  isAuthenticated() {
    return Boolean(localStorage.getItem(TOKEN_KEY));
  }

  JWTIsActual() {
    const expitationTime = JSON.parse(localStorage.getItem(EXPIRES)) as number;
    return expitationTime > Date.now();
  }

  get isUserHasAccess(): boolean {
    return this.isAuthenticated() && this.JWTIsActual();
  }
}
