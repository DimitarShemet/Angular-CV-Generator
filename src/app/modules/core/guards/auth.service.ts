import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PagePath } from 'src/app/shared/enums/routing-path.enums';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isAuth: boolean = false;

  constructor(public router: Router) {}
  logIn() {
    this.isAuth = true;
  }
  logOut() {
    this.isAuth = false;
    this.router.navigate([PagePath.Auth]);
  }
  isAuthenticated() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 2000);
    });
  }
}
