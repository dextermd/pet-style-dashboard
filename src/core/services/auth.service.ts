
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ApiEndpoint, LocalStorage } from '../constants/constants';
import { AuthResponse, LoginPayload } from '../model/auth.model';
import {map} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);
  currentUser = signal<User>({} as User);
  router = inject(Router);

  constructor(
    private _http: HttpClient,
  ) {
    if (this.getUserToken()) {
      this.isAuthenticated.update(() => true);
    }
  }

  login(payload: LoginPayload) {
    return this._http
      .post<AuthResponse>(`${ApiEndpoint.Auth.Login}`, payload)
      .pipe(
        map((res: AuthResponse) => {
          if (res && res.accessToken) {
            localStorage.setItem(LocalStorage.token, res.accessToken);
            this.isAuthenticated.update(() => true);
            localStorage.setItem(LocalStorage.currentUser, JSON.stringify(res.user));
            this.currentUser.update(() => res.user);
          }
          return res;
        })
      );
  }

  logout() {
    localStorage.removeItem(LocalStorage.token);
    this.isAuthenticated.update(() => false);
    localStorage.removeItem(LocalStorage.currentUser);
    this.currentUser.update(() => ({} as User));
    this.router.navigate(['login']).then(r =>   r);
  }

  getUserToken() {
    return localStorage.getItem(LocalStorage.token);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(LocalStorage.currentUser) || '{}');
  }

}
