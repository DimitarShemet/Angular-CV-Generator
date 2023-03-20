import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';

import { AuthService } from '../services/auth.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(public authService: AuthService) {}
  canActivate() {
    return this.authService.isAuthenticated();
  }
  canActivateChild() {
    return this.canActivate();
  }
}
