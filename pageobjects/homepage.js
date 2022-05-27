const { Builder, By, Key, until } = require('selenium-webdriver');
let BasePage = require('./basepage');
let webdriver = require('selenium-webdriver');

class HomePage extends BasePage{
    myAccountButton(){
        return driver.findElement(By.partialLinkText("My Account"));
    }
    logInCreateAccountButton(){
        return driver.findElement(By.partialLinkText("Log In / Create Account"));
    }

    tabElenetary(){
        return driver.findElement(By.id("ui-id-2"));
    }

    classRoomLibraries(){
        return driver.findElement(By.id("ui-id-6"));
    }

    async findAndAddToCard(title){
        await driver.findElement(By.id("searchbox")).clear();
        await driver.findElement(By.id("searchbox")).sendKeys(title, Key.ENTER);
        await driver.findElement(By.css("[title=\"Add to Cart\"]")).click();
        await driver.findElement(By.css("[title=\"Continue\"]")).click();
    }

    cartButton(){
        return driver.findElement(By.className("fa fa-shopping-cart"));
    }

    checkoutButton(){
        return driver.findElement(By.css("[title=\"Go to Checkout\"]"));
    }
}
module.exports = new HomePage();