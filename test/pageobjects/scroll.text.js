import Page from '/test/pageobjects/page';

class ScrollText extends Page {

    open(path) {
        super.open('https://storied.co/storied-platform');
    }
}
describe('Scroll to text', () => {
    it('Scroll to  animation text',  () => {
        ScrollPage.open();
        ScrollPage.TextScroll.scrollIntoView();
        expect(ScrollPage.TextScroll).toBeDisplayed();
        browser.pause(3000);
    });

})

