import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public book;
  title = 'app works!';

  bookClicked(book) {
    console.log('book :', book);
    this.book = book;
  }
}
