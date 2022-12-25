import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(Storage.get({ key: 'ACCESS_TOKEN' })).pipe(
      switchMap((accessToken) => {
        const modifiedRequest = req.clone({
          headers: req.headers.append('x-access-token', accessToken.value),
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}
