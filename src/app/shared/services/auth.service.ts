import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    if (localStorage.getItem('JWT')) {
      return true;
    } else {
      this.router.navigate([ModulePath.AuthFullPath]);
      return false;
    }
  }
}
