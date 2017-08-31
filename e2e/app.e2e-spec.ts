import { Ng2SassCliPage } from './app.po';

describe('ng2-sass-cli App', () => {
  let page: Ng2SassCliPage;

  beforeEach(() => {
    page = new Ng2SassCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
