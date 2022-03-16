class BasePage {
    constructor(driver){
        this.driver = driver
    }

    async goToURL(url) {
        await this.driver.get(url)
    }
}

module.exports = BasePage