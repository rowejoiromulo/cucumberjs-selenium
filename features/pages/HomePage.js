const BasePage = require('./BasePage');
const { By } = require('selenium-webdriver');

class HomePage extends BasePage {
    constructor(driver) {
        super(driver)
        this.driver = driver;
        this.locSearchBox = '//*[@name="q"]';
        this.locSearchBtn = '//*[contains(@class,"FPdoLc")]//*[@name="btnK"]';
    }

    async searchFor(searchString) {
        await this.driver.findElement(By.xpath(this.locSearchBox))
            .sendKeys(searchString);
        await this.driver.findElement(By.xpath(this.locSearchBtn))
            .click();
    }
}

module.exports = HomePage