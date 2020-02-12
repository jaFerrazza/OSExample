const assert = require("assert");

const selectors = {

    SEARCH_INPUT: "#querytext",
    CHECK_IN: '[data-qa="calendar-checkin"]',
    CALENDAR: '[data-qa="calendar"]',
    SEARCH_BUTTON: '[data-qa="search-button"]',
    NEXT_BUTTON: ".cal-btn-next",
    ROOM_TYPE: ".roomtype-item"

};

const typeInData = dataToSearch => {
    const element = $(selectors.SEARCH_INPUT);
    element.click();
    element.addValue(dataToSearch);
    browser.pause(1000)
};
const displayCalendar = () => {
    $(selectors.CHECK_IN).waitForExist();
    const element = $(selectors.CHECK_IN);
    element.click();
    $(selectors.CALENDAR).waitForDisplayed();
};

const selectDates = (checkInDate, checkOutDate) => {
    const checkIn = $(`[datetime="${checkInDate}"]`);
    checkIn.waitForDisplayed(); 
    checkIn.click();
    const checkOut = $(`[datetime="${checkOutDate}"]`); 
    checkOut.waitForDisplayed();
    checkOut.click();
};

const clickNextOnCalendar = () => {
    const element = $(selectors.NEXT_BUTTON);
    element.click();
    $(".cal-day-wrap").waitForExist();
    browser.pause(1000);
};

const pickRoomType = roomType => {
    $(selectors.ROOM_TYPE).waitForDisplayed();
    const elements = $$(selectors.ROOM_TYPE);
    elements[roomType].click();
};

const clickSearchBtn = () => {
    const element = $(selectors.SEARCH_BUTTON);
    element.click();
};

const areSearchResultsShowing = hotelToLookFor => {
    const hotel = $(`.item__name*=${hotelToLookFor}`);
    if(!hotel.isDisplayed()) {
        assert.fail(`${hotelToLookFor} did not show in search results`);
    }
};

module.exports = {
    typeInData,
    displayCalendar,
    selectDates,
    pickRoomType,
    clickSearchBtn,
    clickNextOnCalendar,
    areSearchResultsShowing
};

