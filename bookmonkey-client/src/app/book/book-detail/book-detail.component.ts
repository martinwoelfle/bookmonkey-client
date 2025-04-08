import {Component, inject} from '@angular/core';
import {BookApiService} from '../services/book-api.service';
import {ActivatedRoute} from '@angular/router';
// import {Book} from '../models/book';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, of, switchMap, tap, debounceTime} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
  providers: [BookApiService]
})
export class BookDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookApi = inject(BookApiService);
  protected loading = false;

  // protected book: Book | undefined;

  protected bookSignal = toSignal(
    this.route.params.pipe(
      tap(() => (this.loading = true)),
      debounceTime(2_000),
      switchMap((params) => {
        const isbn = params['isbn'];

        return this.bookApi.getByIsbn(isbn).pipe(catchError(() => of(undefined)))
      })
    ))

  // ngOnInit() {
  //   // this.route.params.subscribe(((params) => {
  //   //   const isbn = params['isbn'];
  //   //   this.bookApi.getByIsbn(isbn).subscribe(bookFromApi =>
  //   //     this.book = bookFromApi);
  //   // }))
  // }
}

