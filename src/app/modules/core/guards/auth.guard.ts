import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  CanActivateChild,
  Router,
} from '@angular/router';
import { ModulePath } from 'src/app/shared/enums/routing-path.enums';
import { AuthService } from './auth.service';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    public authService: AuthService,
    private router: Router,
    public route: ActivatedRoute
  ) {}
  canActivate() {
    return this.authService.isAuthenticated().then((isAuth) => {
      if (isAuth) {
        return true;
      } else {
        this.router.navigate([ModulePath.AuthFullPath]);
        console.log(isAuth);
        return false;
      }
    });
  }
  canActivateChild() {
    return this.canActivate();
  }
}
