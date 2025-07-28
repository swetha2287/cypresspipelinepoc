const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");
module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth: 1920,
  video:true,
  screenshotOnRunFailure:true,
  reporter:'cypress-Mochawesome-reporter',
  reporterOptions:{
    charts:true,
    reportPageTitle: "wknd site test results",
    embeddedScreenshots: true,
    inlineAssets:true,

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
