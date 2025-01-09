
import * as XLSX from 'xlsx';

/*describe('My First Test Leopard', () => {
    it('test1', () => {
         cy.visit('https://demoaccount.asaanretail.pk/login');
         cy.wait(10000)
         cy.wait(4000)
   
        cy.get('#email').should('be.visible').click();
        cy.get('#email').type('mubarak.waqar1998@gmail.com');
        cy.get('#password').should('be.visible').type('mubi@12345');
   
        cy.get('#remember').click();
        cy.get('button[type="submit"]').click();
        cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
        cy.visit('https://demoaccount.asaanretail.pk/order');

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
                 return false
                })

        cy.wait(2000)
        cy.visit('https://demoaccount.asaanretail.pk/order');
        cy.wait(2000)

        cy.get("span[class='nav-buttons-bar'] button[type='submit']").click({force:true})

        cy.wait(2000)

        cy.get("a[onclick='import_third_party_orders(true);']").click({force:true})
        cy.wait(2000)
        cy.get("#upload_CSV_modal_pill").click({force:true})

        cy.get("button[onclick='downloadOrderTemplate()']").click({force:true})


        

       cy.wait(14000)
        
        const downloadsFolder = 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads';



        cy.readFile(`${downloadsFolder}/your-file.xlsx`, 'binary').then((fileContent) => {
          const workbook = XLSX.read(fileContent, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(sheet);
          cy.log(data);
        });
   

    })







})

*/


const fs = require('fs');
const path = require('path');

describe('Bulk Booking CSV', () => {
  it('test1', () => {
    cy.visit('https://demoaccount.asaanretail.pk/login');
    cy.wait(10000);

    
    

    cy.get('#email').should('be.visible').click();
    cy.get('#email').type('mubarak.waqar1998@gmail.com');
    cy.get('#password').should('be.visible').type('mubi@12345');

    cy.get('#remember').click();
    cy.get('button[type="submit"]').click();
    cy.url().should('contain', 'https://demoaccount.asaanretail.pk/home');
    cy.visit('https://demoaccount.asaanretail.pk/order');

    Cypress.on('uncaught:exception', () => {
      // Prevent Cypress from failing the test on exceptions
      return false;
    });

    cy.wait(2000);
    cy.visit('https://demoaccount.asaanretail.pk/order');
    cy.wait(2000);

    cy.get("span[class='nav-buttons-bar'] button[type='submit']").click({ force: true });
    cy.wait(2000);
    cy.get("a[onclick='import_third_party_orders(true);']").click({ force: true });
    cy.wait(2000);
    cy.get('#upload_CSV_modal_pill').click({ force: true });

    cy.get("button[onclick='downloadOrderTemplate()']").click({ force: true });
    cy.wait(14000);

    // Define the downloads folder path
    const downloadsFolder = 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads';
    
    // Get the latest downloaded file
    cy.task('getLatestDownloadedFile', downloadsFolder).then(latestFileName => {
      cy.log(`Latest file downloaded: ${latestFileName}`);
      expect(latestFileName).to.not.be.null;

      const csvPath = `${downloadsFolder}/${latestFileName}`;
      // Optionally, you can perform further assertions or actions with the file
        cy.readFile(csvPath).then(fileContent => {
        cy.log(`File content: ${fileContent}`);


      });

      function generateRandomKey(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
      }

      const 
      
      Externalorderno = generateRandomKey(5)

      function generateordernumber(length) {
        const charset = '0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
      }

      const 


      OrderNo =  generateordernumber(2)
      
     
      function getRecentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      const recentDate = getRecentDate();
      console.log(recentDate); // Outputs: '2024-12-23' (or today's date)
            
     
      const rowsToAppend = [
        [OrderNo, 'AR_028', 'SKUHAIRCUT', '2', '1000', '300', 'GST', 'GST', '200', Externalorderno, recentDate, 'barron', 'default', '+923412106621', 'johndoe@example.com', 'BArron', '+923412106621', 'Gulshan', 'Iqbal', 'Karachi', 'Pakistan', 'barron', '+923412106621', 'Gulshan', 'Iqbal', 'Karachi', 'Pakistan', '2500', 'Muhammad amir', '1', 'personal', 'Sub admin', 'Tall'],
        [OrderNo, 'AR_029', 'SKUHAIRCUT2', '3', '1200', '400', 'GST', 'GST', '250', Externalorderno, recentDate, 'john', 'default', '+923412106622', 'janedoe@example.com', 'John', '+923412106622', 'Clifton', 'Block 2', 'Karachi', 'Pakistan', 'john', '+923412106622', 'Clifton', 'Block 2', 'Karachi', 'Pakistan', '2700', 'Ali Ahmed', '2', 'corporate', 'Admin', 'Short'],
        // Add more rows as needed
      ];
      
      // Append each row to the CSV
      rowsToAppend.forEach(row => {
        cy.task('appendToCSV', { filePath: csvPath, data: row }).then(result => {
          if (result) {
            throw new Error(`Failed to append data to CSV: ${result}`);
          }
        });
      });
      
      // Verify the rows were added
      rowsToAppend.forEach(row => {
        cy.readFile(csvPath).then(content => {
          expect(content).to.include(row.join(','));
        });
      });
      





    



    });
    
     
    




  });


  
  describe('Move and Upload CSV File', () => {
    it('Moves the downloaded file to fixtures and uploads it', () => {
      const downloadsFolder = 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/downloads';
      const fixturesFolder = 'cypress/fixtures';
  
      // Visit and Perform Actions
      cy.visit('https://demoaccount.asaanretail.pk/login');
      cy.get('#email').type('mubarak.waqar1998@gmail.com');
      cy.get('#password').type('mubi@12345');
      cy.get('button[type="submit"]').click();
      cy.url().should('contain', '/home');
  
      cy.visit('https://demoaccount.asaanretail.pk/order');

      cy.get("span[class='nav-buttons-bar'] button[type='submit']").click({ force: true });
      cy.wait(2000);
      cy.get("a[onclick='import_third_party_orders(true);']").click({ force: true });
      cy.wait(2000);
      cy.get('#upload_CSV_modal_pill').click({ force: true });
    /*  cy.get("button[onclick='downloadOrderTemplate()']").click(); */
      cy.wait(10000); // Wait for the file to download
  
      // Move the file to fixtures
      cy.task('getLatestDownloadedFile', downloadsFolder).then(latestFileName => {
        const sourcePath = path.join(downloadsFolder, latestFileName);
        const destinationPath = path.join(fixturesFolder, latestFileName);
        cy.wait(2000);
        // Move the file
        cy.task('moveFile', { source: sourcePath, destination: destinationPath });
        cy.wait(2000);
        // Upload the file
        cy.get('#OrderCSVFile') // Replace with the actual selector for the file input
          .attachFile(latestFileName);
          cy.wait(2000);

          cy.get("#orderCSVUploadFooter").invoke('css', 'display', 'block');
          cy.wait(6000);
          cy.get("#orderCSVUploadFooter").click({ force: true }); // Trigger the modal or action
          cy.wait(6000);
          /*cy.get("#orderCSVUploadFooter > div > button.btn.btn-success.ml-5").click({ force: true });*/

          /*cy.get("#orderCSVUploadFooter > div > button.btn.btn-success.ml-5").click({force: true});*/
  
          cy.get("div[id='product_category_modals'] div[id='orderImportModal'] button[class='btn btn-success ml-5'").click({force: true});

          cy.wait(500)


         /*cy.get('#orderCSVUploadFooter > div > button.btn.btn-success.ml-5').click({force: true});  */ // Submit the upload form
        cy.contains('Task Completed Successfully').should('be.visible');

        cy.task('deleteAllFiles', 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/fixtures');

      });
        





    });
  });
  


});

function deleteAllFiles(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
      const filePath = path.join(folderPath, file);
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath); // Deletes the file
      }
    });

    console.log(`All files deleted from folder: ${folderPath}`);
  } catch (error) {
    console.error(`Error deleting files: ${error.message}`);
  }
}

// Example usage
const folderPath = 'C:/Users/HP ELITEBOOK 840 G3/AppData/Local/Programs/Cypress automation/cypress/fixtures';
deleteAllFiles(folderPath);
