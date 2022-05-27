const homePage = require('../pageobjects/homepage');
const customerLoginPage = require('../pageobjects/cuctomerlogin');
const createAccountPage = require('../pageobjects/createaccountpage');
const checkoutPage = require('../pageobjects/checkoutpaje');
const { elementIsDisabled } = require('selenium-webdriver/lib/until');
let should = require("chai").should();
const validAccount = require("../credentials.json");

 
describe('Second suite', function() {

    this.beforeEach(function() {
        homePage.go_to_url('https://www.perfectionlearning.com/');
    })

    afterEach(function() {
        homePage.driverQuit();
    });

    it('Login and adding a product to the cart', async function() {
        await homePage.myAccountButton().click();
        await homePage.logInCreateAccountButton().click();
        await customerLoginPage.validAccountLogin(validAccount);
        await homePage.findAndAddToCard("Standards-Aligned Classroom Library - Essentials - Grade 1");
        await homePage.cartButton().click();
        await homePage.checkoutButton().click();
        await checkoutPage.inputValidShippingAddress();
        await checkoutPage.FirstShippingMethod().click();
        await checkoutPage.nextButton().click();
        await checkoutPage.choosePaymentMethod();
        await checkoutPage.ccNumber().then(element => {
            should.exist(element);
        });
    });
});