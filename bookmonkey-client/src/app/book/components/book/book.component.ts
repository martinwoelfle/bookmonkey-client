import {Component, effect, inject, Injector, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {BookCardComponent} from '../book-card/book-card.component';
import {BookFilterPipe} from '../../pipes/book-filter/book-filter.pipe';
import {BookApiService} from '../../services/book-api.service';
//import { Subscription} from 'rxjs';
//import {AsyncPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';

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
export class BookComponent implements OnInit {

  private bookApiService = inject(BookApiService);
  private router = inject(Router);
  private readonly injector = inject(Injector);
  //private subscription = Subscription.EMPTY;

  protected books = toSignal(this.bookApiService.getAll(),{
    initialValue: []
  });

  protected bookNumber = 0;

  constructor() {
    //effect(() => {console.log("Number"+this.books.length)});
  }

  bookSearchTerm = "";
  //books: Book[] = [];

  // // lifecycle-hooks
  ngOnInit(): void {
    effect(
      () => {
        console.log("Number", this.books().length);
        this.bookNumber = this.books().length;
      },
      {injector: this.injector}
    );
  }
  //
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // methods
  goToBookDetails(book: Book) {
    console.log('Book-Details');
    console.table(book);
    this.router.navigate(['/books', 'detail', book.isbn]);
  }

  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
