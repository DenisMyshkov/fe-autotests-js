const { Builder, By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basepage');
let webdriver = require('selenium-webdriver');
const faker = require("faker");

class createAccountPage extends BasePage{
    async inputNewValidData(){
        let password = faker.internet.password(20);
        await driver.findElement(By.id("firstname")).clear();
        await driver.findElement(By.id("firstname")).sendKeys(faker.name.firstName());
        await driver.findElement(By.id("lastname")).clear();
        await driver.findElement(By.id("lastname")).sendKeys(faker.name.lastName());
        await driver.findElement(By.id("email_address")).clear();
        await driver.findElement(By.id("email_address")).sendKeys(faker.internet.email());
        await driver.findElement(By.id("password")).clear();
        await driver.findElement(By.id("password")).sendKeys(password);
        await driver.findElement(By.id("password-confirmation")).clear();
        await driver.findElement(By.id("password-confirmation")).sendKeys(password);
        await driver.findElement(By.id("customer_title")).click();
        await driver.findElement(By.xpath("*//option[10]")).click();
    }

    captchaError(){
        return driver.findElement(By.id("recaptcha-validate--error"));
            
    }

    createAnAccountButton(){
        return driver.findElement(By.className("action submit primary"));
    }
}
module.exports = new createAccountPage();