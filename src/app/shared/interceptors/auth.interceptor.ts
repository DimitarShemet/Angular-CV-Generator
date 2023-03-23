import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TOKEN } from '../constants/storage.consts';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/auth/local')) {
      return next.handle(req);
    }

    const clonedReq = req.clone({
      headers: req.headers.append(
        'Authorization',
        'Bearer ' + localStorage.getItem(TOKEN)
      ),
    });
    return next.handle(clonedReq);
  }
}
