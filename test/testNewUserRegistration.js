const homePage = require('../pageobjects/homepage');
const customerLoginPage = require('../pageobjects/cuctomerlogin');
const createAccountPage = require('../pageobjects/createaccountpage');
const basePage = require('../pageobjects/basepage');
let should = require("chai").should();
 
describe('Fist Suite', function() {

    this.beforeEach(function() {
        homePage.go_to_url('https://www.perfectionlearning.com/');
    })

    afterEach(function() {
        homePage.driverQuit();
    });

    it('New user registration', async function() {
        await homePage.myAccountButton().click();
        await homePage.logInCreateAccountButton().click();
        await customerLoginPage.createAnAccountButton().click();
        await createAccountPage.inputNewValidData();
        await createAccountPage.createAnAccountButton().click();
        await createAccountPage.captchaError().getText().
            then(text => {
                text.should.equal("This is a required field.");
            });
    })
})