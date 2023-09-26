import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'creation',
    loadChildren: () =>
      import('../../creation/creation.module').then((m) => m.CreationModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
