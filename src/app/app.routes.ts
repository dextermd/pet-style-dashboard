import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: 'login',
    //canActivate: [guestGuard],
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
          component: DashboardComponent
        },
      ],

  },
  {path: '**', redirectTo: 'home/notfound'},
];
