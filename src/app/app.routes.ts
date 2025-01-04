import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';
import {guestGuard} from '../core/guards/guest.guard';
import {authGuard} from '../core/guards/auth.guard';
import {UsersComponent} from './pages/users/users.component';
import {PetsComponent} from './pages/pets/pets.component';
import {ServicesComponent} from './pages/services/services.component';
import {PromotionsComponent} from './pages/promotions/promotions.component';
import {FaqComponent} from './pages/faq/faq.component';
import {CalendarComponent} from './pages/calendar/calendar.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';

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
          canActivate: [authGuard],
          component: DashboardComponent
        },
        {
          path: 'users',
          canActivate: [authGuard],
          component: UsersComponent
        },
        {
          path: 'pets',
          canActivate: [authGuard],
          component: PetsComponent
        },
        {
          path: 'services',
          canActivate: [authGuard],
          component: ServicesComponent
        },
        {
          path: 'promotions',
          canActivate: [authGuard],
          component: PromotionsComponent
        },
        {
          path: 'faq',
          canActivate: [authGuard],
          component: FaqComponent
        },
        {
          path: 'calendar',
          canActivate: [authGuard],
          component: CalendarComponent
        },
        {
          path: 'appointments',
          canActivate: [authGuard],
          component: AppointmentsComponent
        }
      ],
  },

];
