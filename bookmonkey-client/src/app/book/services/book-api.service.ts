import {inject, Injectable} from '@angular/core';
import {Book} from '../models/book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class BookApiService {

  private readonly httpClient = inject(HttpClient);

  // getAllOld(): Observable<Book[]>{
  //   return of([{isbn: 123, title: 'How to win friends', author: 'Dale Carnegie', abstract: 'In this book ...'},
  //     {isbn: 456, title: 'Funny Book', author: 'Funny Author', abstract: 'This book is really funny ...'},
  //     {isbn: 888, title: 'Funny friends', author: 'Funny Author', abstract: 'This book is really funny ...'}]);
  // }

  getAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>('http://localhost:4730/books');
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:4730/books/${isbn}`);
  }
}
