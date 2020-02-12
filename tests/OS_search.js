const config = require('../wdio.conf').config;
const trivago = require("../pages/trivago_main");
const searchResults = require("../pages/search_results");

describe('Search for a hotel Trivago, then click on View Deal for the searched hotel', () => {
    it('should search for a hotel in Trivago', () => {
        let  hotel = "The Victorian Inn";

        browser.url(config.baseUrl);
        trivago.typeInData(hotel);
        trivago.displayCalendar();
        trivago.clickNextOnCalendar();
        trivago.selectDates("2020-03-03", "2020-03-10");
        trivago.pickRoomType(0);
        trivago.clickSearchBtn();
        trivago.areSearchResultsShowing(hotel);
    });
    it('should click in the View Deal button and validate it got to the right deal', () => {
        searchResults.clickOnViewDealBtn();
        browser.switchWindow("trivago > Expedia");
        searchResults.assertIsOnTheRightPage();
    });
})