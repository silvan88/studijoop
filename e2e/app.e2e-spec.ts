import { StudijoopPage } from './app.po';

describe('studijoop App', function() {
  let page: StudijoopPage;

  beforeEach(() => {
    page = new StudijoopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
