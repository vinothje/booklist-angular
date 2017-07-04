import { BooklistAngularPage } from './app.po';

describe('booklist-angular App', () => {
  let page: BooklistAngularPage;

  beforeEach(() => {
    page = new BooklistAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
