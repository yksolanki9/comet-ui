import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginDetails: { email: string; password: string }) {
    return this.http.post(`${environment.ROOT_URL}/login`, loginDetails).pipe(
      tap(
        async (loginResponse: {
          access_token: string;
          email: string;
          message: string;
          userId: string;
        }) =>
          await Preferences.set({
            key: 'ACCESS_TOKEN',
            value: loginResponse.access_token,
          })
      )
    );
  }

  register(userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return this.http.post(`${environment.ROOT_URL}/register`, userDetails).pipe(
      tap(
        async (loginResponse: {
          access_token: string;
          email: string;
          message: string;
          userId: string;
        }) =>
          await Preferences.set({
            key: 'ACCESS_TOKEN',
            value: loginResponse.access_token,
          })
      )
    );
  }
}
