import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] {
    if (searchTerm.length === 0) {
      return books;
    }

    return books.filter((book) => filterBook(book, searchTerm.toLowerCase()));

    // return books.filter(item => item.title.toUpperCase().includes(searchTerm.toUpperCase()));
  }
}

 function filterBook(book: Book, searchTerm: string): boolean {
   return Object
     .entries(book)
     .some(([_, value]) => {
     if (typeof value === 'string') {
       return value.toLowerCase().includes(searchTerm);
     }
     return false;
   })
 }
