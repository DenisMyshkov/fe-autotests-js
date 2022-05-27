const { Builder, By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basepage');
let webdriver = require('selenium-webdriver');

class customerLoginPage extends BasePage{
    createAnAccountButton(){
        return driver.findElement(By.partialLinkText("Create an Account"));
    }

    async validAccountLogin(account){
        await driver.findElement(By.id("email")).clear();
        await driver.findElement(By.id("email")).sendKeys(account.validAccount.email);
        await driver.findElement(By.id("pass")).clear();
        await driver.findElement(By.id("pass")).sendKeys(account.validAccount.password);
        await driver.findElement(By.id("send2")).click();
    }
}
module.exports = new customerLoginPage();