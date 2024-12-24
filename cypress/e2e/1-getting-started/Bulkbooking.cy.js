
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
      
      randomKey = generateRandomKey(5)


      OrderNo =  generateRandomKey(2)
      
     
      function getRecentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      const recentDate = getRecentDate();
      console.log(recentDate); // Outputs: '2024-12-23' (or today's date)
            
     






      const dataToAppend = [ OrderNo , 'AR_028 ','SKUHAIRCUT', '2','1000','200',
                                'GST','GST','200', randomKey,recentDate,'barron','default','+923412106621','johndoe@example.com', 'BArron','+923412106621'
                                ,'Gulshan','Iqbal','Karachi','Pakistan','barron','+923412106621'
                                ,'Gulshan','Iqbal','Karachi','Pakistan', '2500',]; 


         // Append data to the CSV file
        cy.task('appendToCSV', { filePath: csvPath, data: dataToAppend }).then(result => {
        if (result) {
          throw new Error(`Failed to append data to CSV: ${result}`);
      }



        cy.readFile(csvPath).then(content => {
        expect(content).to.include(dataToAppend.join(','));
      });
    });

    });
    
     
    




  });
});
