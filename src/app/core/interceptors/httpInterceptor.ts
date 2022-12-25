import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Preferences } from '@capacitor/preferences';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(Preferences.get({ key: 'ACCESS_TOKEN' })).pipe(
      switchMap((accessToken) => {
        const modifiedRequest = req.clone({
          headers: req.headers.append('x-access-token', accessToken.value),
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
