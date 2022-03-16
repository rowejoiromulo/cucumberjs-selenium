const BasePage = require("./BasePage");
const { By } = require('selenium-webdriver')

class SearchResultsPage extends BasePage{
    constructor(driver) {
        super(driver)
        this.driver = driver;
        this.loc1stResultLink = '(//*[@id="search"]//a)[1]';
    }

    async getLinkURL () {
        return await this.driver.findElement(By.xpath(this.loc1stResultLink))
            .getAttribute('href')
    }
    
}

module.exports = SearchResultsPage
