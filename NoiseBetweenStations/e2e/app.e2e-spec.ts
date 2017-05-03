import { NoiseBetweenStationsPage } from './app.po';

describe('noise-between-stations App', () => {
  let page: NoiseBetweenStationsPage;

  beforeEach(() => {
    page = new NoiseBetweenStationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
