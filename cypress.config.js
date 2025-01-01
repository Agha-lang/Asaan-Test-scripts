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
/*const fs = require('fs');
const path = require('path');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register custom tasks
      on('task', {
        getLatestDownloadedFile(folderPath) {
          const files = fs.readdirSync(folderPath);
          const sortedFiles = files
            .map(file => ({
              name: file,
              time: fs.statSync(path.join(folderPath, file)).mtime.getTime(),
            }))
            .sort((a, b) => b.time - a.time);
          return sortedFiles.length ? sortedFiles[0].name : null;
        },
      });

      return config; // Always return the config object
    },



    
    downloadsFolder: 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads', // Specify the downloads folder
  },

};
*/
/*const fs = require('fs');
const path = require('path');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register custom tasks
      on('task', {
        // Task to get the latest downloaded file
        getLatestDownloadedFile(folderPath) {
          const files = fs.readdirSync(folderPath);
          const sortedFiles = files
            .map(file => ({
              name: file,
              time: fs.statSync(path.join(folderPath, file)).mtime.getTime(),
            }))
            .sort((a, b) => b.time - a.time);
          return sortedFiles.length ? sortedFiles[0].name : null;
        },

        // Task to append data to a CSV file
        appendToCSV({ filePath, data }) {
          try {
            const csvData = data.join(',') + '\n'; // Convert array to CSV row
            fs.appendFileSync(filePath, csvData, 'utf8');
            return null; // Indicates success
          } catch (err) {
            return err.message; // Return error message on failure
          }
        },
      });

      return config; // Always return the config object
    },
    
    downloadsFolder: 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads', // Specify the downloads folder
  },
};
*/

const fs = require('fs');
const path = require('path');
/*
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register custom tasks
      on('task', {
        // Task to get the latest downloaded file
        getLatestDownloadedFile(folderPath) {
          const files = fs.readdirSync(folderPath);
          const sortedFiles = files
            .map(file => ({
              name: file,
              time: fs.statSync(path.join(folderPath, file)).mtime.getTime(),
            }))
            .sort((a, b) => b.time - a.time);
          return sortedFiles.length ? sortedFiles[0].name : null;
        },

        // Task to append data to a CSV file
        appendToCSV({ filePath, data }) {
          try {
            const csvData = data.join(',') + '\n'; // Convert array to CSV row
            fs.appendFileSync(filePath, csvData, 'utf8');
            return null; // Indicates success
          } catch (err) {
            return err.message; // Return error message on failure
          }
        },

        // Task to move a file
        moveFile({ source, destination }) {
          try {
            fs.renameSync(source, destination); // Move the file
            return null; // Return null to indicate success
          } catch (error) {
            return error.message; // Return the error message in case of failure
          }
        },
      });

      return config; // Always return the config object
    },

    // Specify the downloads folder
    downloadsFolder: 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads',
  },
};

*/



module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register custom tasks
      on('task', {
        // Task to get the latest downloaded file
        getLatestDownloadedFile(folderPath) {
          try {
            const files = fs.readdirSync(folderPath);
            const sortedFiles = files
              .map(file => ({
                name: file,
                time: fs.statSync(path.join(folderPath, file)).mtime.getTime(),
              }))
              .sort((a, b) => b.time - a.time);

            return sortedFiles.length ? sortedFiles[0].name : null;
          } catch (error) {
            return error.message; // Return the error message in case of failure
          }
        },

        // Task to append data to a CSV file
        appendToCSV({ filePath, data }) {
          try {
            const csvData = data.join(',') + '\n'; // Convert array to CSV row
            fs.appendFileSync(filePath, csvData, 'utf8');
            return null; // Indicates success
          } catch (err) {
            return err.message; // Return error message on failure
          }
        },

        // Task to move a file
        moveFile({ source, destination }) {
          try {
            fs.renameSync(source, destination); // Move the file
            return null; // Return null to indicate success
          } catch (error) {
            return error.message; // Return the error message in case of failure
          }
        },

        // Task to delete all files from a folder
        deleteAllFiles(folderPath) {
          try {
            const files = fs.readdirSync(folderPath);

            files.forEach(file => {
              const filePath = path.join(folderPath, file);
              if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath); // Deletes the file
              }
            });

            return null; // Indicates success
          } catch (error) {
            return error.message; // Return error message in case of failure
          }
        },
      });

      return config; // Always return the config object
    },

    // Specify the downloads folder
    downloadsFolder: 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads',
  },
};
