import { Component, inject } from '@angular/core';
import {Router} from '@angular/router';
import {AppSettings} from '../../../core/services/app-settings.service';
import {FormsModule, NgForm} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import {NgIf} from '@angular/common';
import {HttpErrorResponse} from '@angular/common/http';
import {MyToastrService} from '../../../core/services/toastr.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authService = inject(AuthService);
  appSettings = inject(AppSettings);
  myToastrService = inject(MyToastrService);
  router = inject(Router);

  constructor() {
    this.appSettings.appEmpty = true;
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
  }

  formSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    const rememberMe = f.value.rememberMe;

    if (f.valid) {
      this.authService.login({email, password}).subscribe({
        next: (response) => {
          this.router.navigate(['']).then(r => r);
        },
        error: (error: HttpErrorResponse) => {
          if (error.error && error.error.message) {
            this.myToastrService.showError( 'Ошибка', error.error.message);
          } else {
            this.myToastrService.showError('Ошибка', 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.');
          }
        }
      });
    } else {
      this.myToastrService.showError('Ошибка', 'Пожалуйста, заполните все поля.');
    }
  }
}
