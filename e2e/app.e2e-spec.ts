import { ZalgoUIPage } from './app.po';

describe('zalgo-ui App', () => {
  let page: ZalgoUIPage;

  beforeEach(() => {
    page = new ZalgoUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
