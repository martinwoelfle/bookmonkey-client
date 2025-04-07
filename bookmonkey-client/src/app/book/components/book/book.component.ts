import {Component, inject} from '@angular/core';
import {Book} from '../../models/book';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../../pipes/book-filter/book-filter.pipe';
import {BookApiService} from '../../services/book-api.service';
//import { Subscription} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [
    BookCardComponent,
    BookFilterPipe,
    AsyncPipe
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  providers: [BookApiService]
})
export class BookComponent {

  private bookApiService = inject(BookApiService);
  //private subscription = Subscription.EMPTY;
  protected books$ = this.bookApiService.getAll();

  bookSearchTerm = "";
  books: Book[] = [];

  // // lifecycle-hooks
  // ngOnInit(): void {
  //   this.subscription = this.bookApiService.getAll().subscribe({next: books => this.books = books});
  // }
  //
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // methods
  goToBookDetails(book: Book) {
    console.log('Book-Details');
    console.table(book);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
