import { WebCashPage } from './app.po';

describe('web-cash App', () => {
  let page: WebCashPage;

  beforeEach(() => {
    page = new WebCashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
