const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");
module.exports = defineConfig({
  
  viewportHeight:1080,
  viewportWidth: 1920,
  video:true,
  screenshotOnRunFailure:true,
  reporter:'cypress-mochawesome-reporter',
  reporterOptions:{
    reportDir:"cypress/reports/mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,
    charts:true,
    reportPageTitle: "wknd site test results",
    embeddedScreenshots: true,
    inlineAssets:true,
    reportFilename: 'smoketest_[datetime]-report',
    // Specify the format of the timestamp: 'longDate', 'isoDateTime', or custom dateformat string
    timestamp: 'isoDateTime'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
