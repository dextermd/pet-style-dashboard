import { Routes } from '@angular/router';

import {LayoutComponent} from './shared/layout/layout.component';
import {guestGuard} from '../core/guards/guest.guard';
import {authGuard} from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'users',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/users/users.component').then((m) => m.UsersComponent),
      },
      {
        path: 'pets',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/pets/pets.component').then((m) => m.PetsComponent),
      },
      {
        path: 'services',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/services/services.component').then(
            (m) => m.ServicesComponent
          ),
      },
      {
        path: 'promotions',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/promotions/promotions.component').then(
            (m) => m.PromotionsComponent
          ),
      },
      {
        path: 'faq',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/faq/faq.component').then((m) => m.FaqComponent),
      },
      {
        path: 'calendar',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/calendar/calendar.component').then(
            (m) => m.CalendarComponent
          ),
      },
      {
        path: 'appointments',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./pages/appointments/appointments.component').then(
            (m) => m.AppointmentsComponent
          ),
      },
    ],
  },
];
