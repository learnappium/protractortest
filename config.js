var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineReporters = require('jasmine-reporters');
var number="";
exports.config = {
    

  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['number'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
    onPrepare: function () {
        console.log('number is :='+number);
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
          savePath: 'reports/junit',
          consolidateAll: false
      }));
          jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );
       }
    
};
