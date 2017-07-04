import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Output() onBookClick: EventEmitter<any> = new EventEmitter();
  private booklist: any[];

  constructor() {
  }

  ngOnInit() {
    this.booklist = [
      {id: 1, title: 'harry potter'},
      {id: 2, title: 'bloomberg'},
      {id: 3, title: 'Mystic Love'}
    ];
  }

  displayDetails(book) {
    console.log('clicked ', book);
    this.onBookClick.emit(book);
  }

}
