import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() book;
  constructor() {
  }

  ngOnInit() {
    console.log(this.book);
  }
}
