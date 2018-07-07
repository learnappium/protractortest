//-----------------    with page object---------------------
var homePage = require('./../pageobjects/HomePage');
var homepage = new homePage();
//Suite in Jasmine
describe('angularjs homepage todo list', function() { 
  // Test in Jasmine
  it('opening home page', function() { 
   homepage.openpage();
   //verify title   
    expect(homepage.getTitle()).toEqual('CryptoCompare.com - Live cryptocurrency prices, trades, volumes, forums, wallets, mining equipment and reviews | CryptoCompare.com');
   //clicking on login/register link
    homepage.clickOnLoginRegister();
    browser.takeScreenshot();
    browser.sleep(10000);
  });
});

//---------------------without page object---------------------------

/*
var homePage = require('./../pageobjects/HomePage.js');
//Suite in Jasmine
describe('angularjs homepage todo list', function() { 
  // Test in Jasmine
  it('opening home page', function() { 
    // Entering application url in browser
    browser.get('https://www.cryptocompare.com');
    browser.waitForAngularEnabled(false);
    browser.sleep(3000);
   //verify title
    expect(browser.getTitle()).toEqual('CryptoCompare.com - Live cryptocurrency prices, trades, volumes, forums, wallets, mining equipment and reviews | CryptoCompare.com');
    //clicking on login/register link
    browser.findElement(by.xpath('//a[@ng-click="showLogin()"]/i'))
  });
});

*/