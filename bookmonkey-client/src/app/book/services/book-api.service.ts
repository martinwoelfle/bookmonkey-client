import { Injectable } from '@angular/core';
import {Book} from '../models/book';

@Injectable()

export class BookApiService {

  constructor() { }

  getAll(): Book[]{
    return [{isbn: 123, title: 'How to win friends', author: 'Dale Carnegie', abstract: 'In this book ...'},
      {isbn: 456, title: 'Funny Book', author: 'Funny Author', abstract: 'This book is really funny ...'},
      {isbn: 888, title: 'Funny friends', author: 'Funny Author', abstract: 'This book is really funny ...'}];
  }
}
