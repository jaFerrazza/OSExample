const selectors = {
    
    VIEW_DEAL: '[data-qa="champion-deal"]',
    VALIDATOR: '[data-stid="open-hotel-information"]'
};

const clickOnViewDealBtn = () => {
    $(selectors.VIEW_DEAL).waitForDisplayed();
    const elements = $$(selectors.VIEW_DEAL);
    elements[0].click();
    browser.pause(1000);
};

const assertIsOnTheRightPage = () => {
    $(selectors.VALIDATOR).waitForExist(20000);
    const elements = $$(selectors.VALIDATOR);
    let string = elements[0].getAttribute("href");

    if (!string.includes("The-Victorian-Inn")) {
        assert.fail("Deal is not showing the selected hotel");
    }
};

module.exports = {
    clickOnViewDealBtn,
    assertIsOnTheRightPage
};