import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TOKEN } from '../constants/storage.consts';
import { ModulePath } from '../enums/routing-path.enums';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isUserHasAccess()) {
      return next.handle(req);
    } else {
      this.router.navigate([ModulePath.AuthFullPath]);
      return next.handle(req);
    }
  }
}
