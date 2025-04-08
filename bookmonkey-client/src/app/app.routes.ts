import {AboutComponent} from './about/about.component';
import {Route} from '@angular/router';
import {BookComponent} from './book/components/book/book.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';

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
    component: BookComponent
  },
  {
    path: 'books/detail/:isbn',
    component: BookDetailComponent
  }]
