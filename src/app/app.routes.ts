import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { mainRoutes } from './main/main.routes';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
              path: '',
              loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
              children: mainRoutes
            }
        ]
    },
];