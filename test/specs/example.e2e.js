describe(' My first autotest', () => {
    it('Testing ', ()=> {
        browser.url('https://storied.co/storied-platform')
    });
    it('click on Demo', () =>{
        browser.setWindowSize(768,1040);
        browser.pause(3000)
    })
});
    describe('Scroll to text', () => {
        it('Scroll to  animation text',  () => {
            browser.url('https://storied.co/storied-platform');
            const TextScroll = $('#element_5e55be39bc20d');
            TextScroll.scrollIntoView();
            expect(TextScroll).toBeDisplayed();
            browser.pause(3000);
            });

    })

