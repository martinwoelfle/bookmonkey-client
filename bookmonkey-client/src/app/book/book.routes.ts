import {Route} from '@angular/router';
import {BookComponent} from './components/book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

export const bookRoutes: Route[] = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'about',
},
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'detail/:isbn',
    component: BookDetailComponent
  }]
