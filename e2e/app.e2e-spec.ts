import { PrimeNumbersPage } from './app.po';

describe('prime-numbers App', () => {
  let page: PrimeNumbersPage;

  beforeEach(() => {
    page = new PrimeNumbersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
