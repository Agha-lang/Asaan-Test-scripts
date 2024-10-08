// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
  
//   pageLoadTimeout: 150000,
//   reporter: 'cypress-mochawesome-reporter', //for html report
//    e2e: {
//    /* baseUrl: 'http://localhost:1234',*/
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
     
      
//     },
//   },

  
// });

// {
//   reporter: "cypress-mochawesome-reporter"
// }

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demoaccount.asaanretail.pk',

    defaultCommandTimeout: 10000,   // Default command timeout of 10 seconds
    pageLoadTimeout: 20000,        // Increase page load timeout to 120 seconds
  }
});


