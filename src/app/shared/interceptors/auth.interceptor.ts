import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { TOKEN } from '../constants/token.consts';
import { ModulePath } from '../enums/routing-path.enums';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/auth/local')) {
      return next.handle(req);
    }

    if (this.authService.isUserHasAccess) {
      const clonedReq = req.clone({
        headers: req.headers.append(
          'Authorization',
          'Bearer ' + localStorage.getItem(TOKEN)
        ),
      });
      return next.handle(clonedReq);
    } else {
      this.router.navigate([ModulePath.AuthFullPath]);
      return EMPTY;
    }
  }
}
