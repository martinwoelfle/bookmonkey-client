import { Component } from '@angular/core';
import { BookCardComponent } from './book-card/book-card.component';
import {Book} from './book';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookmonkey-client2';
  books: Book[] = [{isbn: 123, title: 'How to win friends', author: 'Dale Carnegie', abstract: 'In this book ...'},
                    {isbn: 456, title: 'Funny Book', author: 'Funny Author', abstract: 'This book is really funny ...'}];

  goToBookDetails(book: Book) {
    console.log('Book-Details');
    console.table(book);
  }
}
