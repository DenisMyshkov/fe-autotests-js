let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (50000)});


class BasePage{
    constructor(){
        global.driver = driver;
    }

    go_to_url(theURL){
        driver.get(theURL);
    }

    driverQuit(){
        driver.quit();
    }
}

module.exports = BasePage;