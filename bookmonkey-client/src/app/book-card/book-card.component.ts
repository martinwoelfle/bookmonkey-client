import {Component, input, output} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  customStyle = { 'color': 'DodgerBlue', 'font-size': '40px' };
  content = input.required<Book>();
  detailClick = output<Book>()

  handleDetailClick(event: MouseEvent): void {
    event.preventDefault();
    this.detailClick.emit(this.content());
  }
}
