import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from '../constants/storage.consts';
import { ModulePath, PagePath } from '../enums/routing-path.enums';
import { ILogInData } from '../interfaces/login-data.interface';
import { AuthApiService } from './api/auth.api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authApiService: AuthApiService, private router: Router) {}

  logIn(logInData: ILogInData) {
    this.authApiService.getToken(logInData);
  }

  isAuthenticated() {
    console.log(localStorage.getItem('JWT'));
    return Boolean(localStorage.getItem(TOKEN));
  }

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

  isJWTExpired() {
    const token = localStorage.getItem(TOKEN);
    const decodedToken = this.decodeJWT(token);
    const currTimeInSec = Date.now() / 1000;
    return decodedToken.exp < currTimeInSec;
  }

  isUserHasAccess() {
    console.log(this.isAuthenticated());
    console.log(!this.isJWTExpired());
    return this.isAuthenticated() && !this.isJWTExpired();
  }
  //написат ьтут метод, который  проверяет не expires ли токен и авторизован ли я , если false ,то вовзращает false и навигирует  на авторизацию (данный метод вызывает интерспетор)
}
