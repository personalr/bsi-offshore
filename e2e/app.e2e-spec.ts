import { BsiPage } from './app.po';

describe('bsi App', () => {
  let page: BsiPage;

  beforeEach(() => {
    page = new BsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
