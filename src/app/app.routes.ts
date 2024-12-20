import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { mainRoutes } from './main/main-routing';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full',
        children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            {
              path: 'main',
              loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
              children: mainRoutes
            }
        ]
    },
];
