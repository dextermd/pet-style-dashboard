import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LayoutComponent} from './shared/layout/layout.component';
import {guestGuard} from '../core/guards/guest.guard';
import {authGuard} from '../core/guards/auth.guard';
import {UsersComponent} from './pages/users/users.component';
import {PetsComponent} from './pages/pets/pets.component';

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
        }
      ],
  },

];
