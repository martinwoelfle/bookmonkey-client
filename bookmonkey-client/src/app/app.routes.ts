import {AboutComponent} from './about/about.component';
import {Route} from '@angular/router';

export const routes: Route[] = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.routes').then(module => module.bookRoutes)
  }]
