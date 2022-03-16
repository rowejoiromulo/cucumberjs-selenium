const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultPage');
const assert = require('assert');

Given('I am at {string}', async function (website) {
    this.homePage = new HomePage(this.driver);
    await this.homePage.goToURL(website);
})

When('I searched for {string}', async function (searchString) {
    await this.homePage.searchFor(searchString);
})

Then(/Top search result is (\w+)'s website/, async function (webpage) {
    this.searchResultsPage = new SearchResultsPage(this.driver);
    const pageLink = await this.searchResultsPage.getLinkURL();
    assert.equal(pageLink, `https://www.${webpage.toLowerCase()}.com/`);
})