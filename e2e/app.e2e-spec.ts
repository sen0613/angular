import { CompJtronPage } from './app.po';

describe('comp-jtron App', () => {
  let page: CompJtronPage;

  beforeEach(() => {
    page = new CompJtronPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
