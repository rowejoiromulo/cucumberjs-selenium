const { After, Before } = require('@cucumber/cucumber');
const setupDriver = require('../support/setupDriver');

Before(function () {
    this.driver = setupDriver(this);
})

After(function () {
    this.driver.quit();
})