
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorage } from '../constants/constants';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authServices = inject(AuthService);
  const router = inject(Router);

  if (authServices.isAuthenticated()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authServices.getUserToken()}`
      }
    });
  }

  return next(req).pipe(
    retry(2),
    catchError((e: HttpErrorResponse) => {
      if (e.status === 401) {
        localStorage.removeItem(LocalStorage.token);
        localStorage.removeItem(LocalStorage.currentUser);
        router.navigate(['']).then(r => r);
      }
      const error = e.error || e.statusText;
      return throwError(() => error);
    })
  );
};
