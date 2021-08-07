let Page = require ('/test/pageobjects/page');

class ScrollPage extends Page {
    get TextScroll() {
        return $ ('#element_5e55be39bc20d')
    }
    open(path) {
        super.open('https://storied.co/storied-platform');
    }
}
exports.ScrollPage = ScrollPage;