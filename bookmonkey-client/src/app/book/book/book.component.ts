import {Component} from '@angular/core';
import {Book} from '../book';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../book-filter/book-filter.pipe';

@Component({
  selector: 'app-book',
  imports: [
    BookCardComponent,
    BookFilterPipe
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  bookSearchTerm: string = "";
  books: Book[] = [{isbn: 123, title: 'How to win friends', author: 'Dale Carnegie', abstract: 'In this book ...'},
    {isbn: 456, title: 'Funny Book', author: 'Funny Author', abstract: 'This book is really funny ...'},
    {isbn: 888, title: 'Funny friends', author: 'Funny Author', abstract: 'This book is really funny ...'}];

  goToBookDetails(book: Book) {
    console.log('Book-Details');
    console.table(book);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
