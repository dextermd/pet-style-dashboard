import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';
import {guestGuard} from '../core/guards/guest.guard';
import {authGuard} from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children:
      [
        {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        {
          path: 'dashboard',
          //canActivate: [authGuard, adminGuard],
          canActivate: [authGuard],
          component: DashboardComponent
        },
      ],

  },
  {path: '**', redirectTo: 'home/notfound'},
];
