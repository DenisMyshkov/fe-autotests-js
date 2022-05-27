const { Builder, By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basepage');
let webdriver = require('selenium-webdriver');
const faker = require("faker");

class checkoutPage extends BasePage{
    async inputValidShippingAddress(){
        await driver.findElement(By.css("[name=\"street[0]\"]")).clear();
        await driver.findElement(By.css("[name=\"street[0]\"]")).sendKeys(faker.address.streetAddress());
        await driver.findElement(By.css("[name=\"city\"]")).clear();
        await driver.findElement(By.css("[name=\"city\"]")).sendKeys(faker.address.cityName());
        await driver.findElement(By.css("[name=\"postcode\"]")).clear();
        await driver.findElement(By.css("[name=\"postcode\"]")).sendKeys(faker.address.zipCode());
        await driver.findElement(By.css("[name=\"telephone\"]")).clear();
        await driver.findElement(By.css("[name=\"telephone\"]")).sendKeys(faker.phone.phoneNumber());
        await driver.findElement(By.css("[name=\"region_id\"]")).sendKeys("ala", Key.RETURN);
    }

    FirstShippingMethod(){
        return driver.findElement(By.css("[name=\"ko_unique_1\"]"));            
    }

    nextButton(){
        return driver.findElement(By.className("button action continue primary"));
    }

    async choosePaymentMethod(){
        await driver.findElement(By.css("[name=\"payment[method]\"]")).click();
    }

    ccNumber() {
        return driver.findElement(By.className("credit-card-types braintree-credit-card-types"));
    }
}
module.exports = new checkoutPage();