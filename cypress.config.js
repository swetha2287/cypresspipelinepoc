const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewportHeight:1080,
  viewportWidth: 1920,
  
   
    
  // 1. Tell Cypress to use the multi-reporter as its main entry point
  reporter: 'cypress-multi-reporters',
  
  // 2. Point it to our new, clean configuration file
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // 3. The Mochawesome plugin is STILL needed here.
      // Its job is now simply to merge the HTML report at the end.
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
