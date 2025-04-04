import {Component, inject} from '@angular/core';
import {Book} from '../../models/book';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../../pipes/book-filter/book-filter.pipe';
import {BookApiService} from '../../services/book-api.service';

@Component({
  selector: 'app-book',
  imports: [
    BookCardComponent,
    BookFilterPipe
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  providers: [BookApiService]
})
export class BookComponent {

  private bookApiService = inject(BookApiService);

  bookSearchTerm: string = "";
  books: Book[] = this.bookApiService.getAll();

  goToBookDetails(book: Book) {
    console.log('Book-Details');
    console.table(book);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
