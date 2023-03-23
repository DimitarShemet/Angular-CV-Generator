import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ModulePath } from '../enums/routing-path.enums';

import { AuthService } from '../services/auth.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, private router: Router) {}
  canActivate() {
    if (this.authService.isAuthenticated()) {
      console.log(this.authService.isAuthenticated());
      return true;
    }
    this.router.navigate([ModulePath.AuthFullPath]);
    return false;
  }
}
