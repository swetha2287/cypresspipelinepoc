const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  viewportHeight:1080,
  viewportWidth: 1920,
  
   
    
reporter: 'cypress-multi-reporters',
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
