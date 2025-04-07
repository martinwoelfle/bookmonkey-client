import {Component, inject, OnInit, OnDestroy} from '@angular/core';
import {Book} from '../../models/book';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../../pipes/book-filter/book-filter.pipe';
import {BookApiService} from '../../services/book-api.service';
import { Subscription} from 'rxjs';

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
export class BookComponent implements OnInit, OnDestroy {

  private bookApiService = inject(BookApiService);
  private subscription = Subscription.EMPTY;

  bookSearchTerm = "";
  books: Book[] = [];

  // lifecycle-hooks
  ngOnInit(): void {
    this.subscription = this.bookApiService.getAll().subscribe({next: books => this.books = books});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // methods
  goToBookDetails(book: Book) {
    console.log('Book-Details');
    console.table(book);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
