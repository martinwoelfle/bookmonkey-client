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

    return books.filter(item => item.title.toUpperCase().includes(searchTerm.toUpperCase()));
  }
}

 // function filterBook(books: Book, searchTerm: string): boolean {
 //   Object.entries(books).some(([key, value]) => {
 //     if (typeof searchTerm === 'string') {
 //       return value.ToLowerCase().includes(searchTerm.toLowerCase());
 //     }
 //     return false;
 //   })
 // }
