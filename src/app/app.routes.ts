import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout.component';
import { HomeTestComponent } from './pages/home-test/home-test.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeTestComponent,
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.authRoutes),
  },
];