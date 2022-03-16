const seleniumwebdriver = require('selenium-webdriver');
require('chromedriver');

module.exports = function setupDriver(that) {
    that.driver = new seleniumwebdriver.Builder()
        .forBrowser('chrome')
        .build();
    return that.driver
}
