const assert = require('assert')
const config = require('../wdio.conf').config;

describe('Search for Open Saturday website in Google', () => {
    it('should search for Open Saturday in Google', () => {
        browser.url(config.baseUrl);
        const searchEle = '[title = "Buscar"]'; 
        $(searchEle).setValue('Open Saturday santo domingo');
        $(searchEle).addValue('\uE006');
    });
    it('should open the Open Saturday website', () => {
        const openSaturdayLink = 'h3=Open Saturday Conf';
        $(openSaturdayLink).waitForDisplayed();
        $(openSaturdayLink).click();
        const openSaturdayTitle = browser.getTitle();
        assert.strictEqual(openSaturdayTitle, 'Open Saturday Conf', `Title expected to be ${openSaturdayTitle}`);
    });
})