const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewportHeight:1080,
  viewportWidth: 1920,
  
   
    
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
    // --- Global options for the final HTML report ---
    charts: true,
    reportPageTitle: 'Cypress Test Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,

    // --- Sub-reporter configuration ---
    reporterEnabled: 'mochawesome, mocha-junit-reporter',

    // Mochawesome saves its temp JSON files here
    mochawesomeReporterOptions: {
      reportDir: 'cypress/results/mochawesome',
      overwrite: false,
      html: false,
      json: true,
    },
    
    // JUnit saves its XML files here
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/results/junit/results-[hash].xml',
    },
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // 3. The Mochawesome plugin is STILL needed here.
      // Its job is now simply to merge the HTML report at the end.
     // require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
