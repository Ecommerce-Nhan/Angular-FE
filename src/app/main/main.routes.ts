import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
    { path: 'store', loadComponent: () => import('./store/store.component').then(m => m.StoreComponent) }
  ];