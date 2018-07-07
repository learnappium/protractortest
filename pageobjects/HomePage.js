var HomePage = function() {
   var login_register_link = element(by.xpath('//a[@ng-click="showLogin()"]/i'))
this.openpage = function() {
    browser.get('https://www.cryptocompare.com');
    browser.waitForAngularEnabled(false);
    browser.sleep(3000);
    	
  };
this.getTitle = function() {
    return browser.getTitle();
  };
  
this.clickOnLoginRegister = function() {
    login_register_link.click();
	};
	
};
module.exports = HomePage