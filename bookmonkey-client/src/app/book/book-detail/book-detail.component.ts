import {Component, inject, OnInit} from '@angular/core';
import {BookApiService} from '../services/book-api.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../models/book';

@Component({
  selector: 'app-book-detail',
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss',
  providers: [BookApiService]
})
export class BookDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly bookApi = inject(BookApiService);

  protected book: Book | undefined;

  ngOnInit() {
    this.route.params.subscribe(((params) => {
      const isbn = params['isbn'];
      this.bookApi.getByIsbn(isbn).subscribe(bookFromApi =>
        this.book = bookFromApi);
    }))
  }
}
