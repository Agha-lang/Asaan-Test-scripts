



describe('My First Test Leopard', () => {
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
         
        
        
         cy.visit('https://demoaccount.asaanretail.pk/order');
         cy.get('.bulkActionDiv').should('be.visible').click({force: true});
         cy.get('.nav-buttons-bar > .btn-success').click();
         cy.wait(2000);
         cy.get('input[name="external_order_no"]').click({force: true}); 
         cy.wait(4000);
   
         const errorMessage = 'The requested product does not exist';
   
         cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   
       function getRandomTimeout(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
         
       }
   
       const Timeout = getRandomTimeout(5)
   
     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
         const startTime = new Date().getTime();
         
         function checkValue() {
           const currentTime = new Date().getTime();
           if (currentTime - startTime > Timeout) {
             throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
           }
       
           cy.get(selector).invoke('val').then((actualValue) => {
             if (actualValue === expectedValue) {
               return cy.wrap(actualValue);
             } else {
               cy.wait(interval).then(() => checkValue());
             }
           });
         }
       
       checkValue();
     }
         cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
         waitForInputValue('input[name="external_order_no"]', randomKey)
         cy.get('input[name="tracking_id"]').click({ force: true })
      
         cy.wait(2000);
        
         cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
         cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
         cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true})
         cy.wait(2000);
         cy.wait(4000);
         cy.get('span[id="select2-customer_order_dropdown-container"] span[class="select2-selection__placeholder"]').click()
         cy.wait(2000);
   
   
         cy.get('input[aria-label="Search"]').type('+923412106621')
         cy.wait(6000)
         cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
        
        .should('exist')
        .and('be.visible'); 
        
        
         cy.get('li[title="Barron"]').click({multiple:true})
         cy.wait(5000)
   
         cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({force: true})
         cy.get('#select2-sales_rep-container').click({force: true});
         cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
         cy.get('#select2-sales_rep-container').click({force: true});
         cy.get('td #searchProductInput').click();
         cy.get('td #searchProductInput').type('{backspace}');
         cy.get('td #searchProductInput').type('{backspace}');
         cy.get('td #searchProductInput').type('garlic press');
         cy.wait(3000)
         cy.wait(3000)
         cy.get('#searchResults > ul > li:nth-child(1)').click();
         cy.wait(1000);
         cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
         cy.wait(1000);
         cy.get('.fas.fa-shopping-cart.mr-5').click();
         cy.wait(2000);
         cy.wait(4000);
         
         cy.get('#return_modal_pill').click({force:true})
         cy.wait(2000);
         cy.get('#statusButton').click({multiple: true});
         cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
         Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from failing the test
          return false
         })
         cy.wait(3000)
        
   
         
         cy.get('#return_modal_pill').click()
         cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
         cy.wait(3000)
         cy.get('.modal_card_body').click({force: true})
         cy.wait(3000)
        
         cy.get('#couriers').select('AR-Leopards ( Leopards )');
         cy.wait(6000)
        
        
         cy.get('#invoiceButton').click();
         cy.get('#leopards').submit().wait(10000); ;
   
         cy.wait(5000);
         Cypress.on('uncaught:exception', (err, runnable) => {
           // returning false here prevents Cypress from failing the test
                return false
               })
       
         cy.wait(2000);
         Cypress.on('uncaught:exception', (err, runnable) => {
           // returning false here prevents Cypress from failing the test
                return false
               })
        
         cy.get('#return_modal_pill').click()
         cy.wait(3000)
        
         cy.get('.scrollable_div_with_height_550').click();
   
         cy.wait(2000)
   
   
         
        
         
         cy.get('#widePopupModal .modal-content > .modal-header').click();
         cy.wait(2000)
   
         cy.wait(8000)
   
         cy.wait(5000);
         cy.get('.btn-block:nth-child(2)').click();
         cy.wait(4500)
        /* cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')*/
         cy.wait(8000)
   
         cy.wait(4000);
         cy.get('.fa.fa-window-close').click({force: true});
   
         
         cy.wait(5000)
        
         cy.wait(8000)
    
         cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click(); 
         cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
      
   
         cy.wait(3000)
   
         cy.wait(4000)
         cy.get('.modal_card_body').click({multiple: true});
   
        
   
       
        
   
   
         
         cy.wait(2000)
         cy.get('#widePopupModal .span-cross-modal').click();
   
   
   
         cy.wait(10000)
   
   
         /*Leopard cancellation*/
        
   
        
   
   
   
   
         
   
   
            
   })  
   })
              
     
                      
       
   
   describe('Name of second test case M&P', function(){
   
         it('test2', () => {
   
         cy.visit('https://demoaccount.asaanretail.pk/login');
         cy.wait(10000)
         cy.wait(4000)
         cy.get('#email').should('be.visible').click();
         cy.get('#email').type('mubarak.waqar1998@gmail.com');
         cy.get('#password').should('be.visible').type('mubi@12345');
         
         cy.get('#remember').click();
         cy.get('button[type="submit"]').click();
         cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
         cy.wait(1000)
   
         cy.visit('https://demoaccount.asaanretail.pk/order');
   
   
   
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
         
         cy.visit('https://demoaccount.asaanretail.pk/order');
         cy.get('.bulkActionDiv').click();
         cy.get('.nav-buttons-bar > .btn-success').click();
         cy.wait(2000);
   
         const errorMessage = 'The requested product does not exist';
   
   
         cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
         cy.wait(2000);
         
         cy.get('input[name="external_order_no"]').click({force: true}); 
         cy.wait(2000);
         cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
             cy.wait(4000);
   
       
       
       function getRandomTimeout(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
         
       }
   
   
           const Timeout = getRandomTimeout(5)
   
       function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
         const startTime = new Date().getTime();
         
       function checkValue() {
           const currentTime = new Date().getTime();
           if (currentTime - startTime > Timeout) {
             throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
           }
       
           cy.get(selector).invoke('val').then((actualValue) => {
             if (actualValue === expectedValue) {
               return cy.wrap(actualValue);
             } else {
               cy.wait(interval).then(() => checkValue());
             }
           });
         }
       
         checkValue();
       }
     
   
   
         cy.get('input[name="tracking_id"]').click({ force: true });
         waitForInputValue('input[name="external_order_no"]', randomKey)      
         cy.wait(2000);
        /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
         
         cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
         /*cy.get('input[name="tracking_id"]').click()*/
         cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
   
        /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
         
         cy.wait(6000);
         
         cy.get('input[aria-label="Search"]').type('+923412106621')
         cy.wait(6000)
         cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
       .should('exist')
       .and('be.visible');    
       cy.get('li[title="Barron"]').click({multiple:true})
   
         cy.wait(5000)
         cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({foce:true})
         cy.get('#select2-sales_rep-container').click();
         cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
         cy.get('#select2-sales_rep-container').click();
         cy.get('td #searchProductInput').click();
         cy.get('td #searchProductInput').type('{backspace}');
         cy.get('td #searchProductInput').type('{backspace}');
         cy.get('td #searchProductInput').type('garlic press');
         cy.wait(3000)
         cy.wait(3000)
         cy.get('#searchResults > ul > li:nth-child(1)').click();
         cy.wait(1000);
         cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
         cy.wait(1000);
         cy.get('.fas.fa-shopping-cart.mr-5').click();
         cy.wait(1000);
         /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
         cy.get('#return_modal_pill').click({force:true})
         cy.wait(2000);
         cy.get('#statusButton').click()
         cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   
         Cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from failing the test
          return false
         })
         cy.wait(3000)
        
   
         
         cy.get('#return_modal_pill').click({force:true})
         cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
         cy.wait(3000)
         cy.get('.modal_card_body').click()
         cy.wait(3000)
   
         
        /*M&P booking */
        cy.wait(3000)
         
        cy.get('#couriers').select('M&P ( M&P )', {force: true})
        cy.wait(3000)
       
        cy.wait(3000)
   
        cy.get("#Remarks").type('Great')
   
        cy.wait(3000)
        
       
       
        
        
   
        
   
   
   
   
        cy.wait(3000)
        
        cy.get('.scrollable_div_with_height_550').click();
   
        cy.wait(2000)
   
        cy.get('#widePopupModal .modal-content > .modal-header').click();
        cy.wait(2000)
        cy.get('.btn-block:nth-child(2)').click();
        cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
        cy.wait(5000)
   
   
        cy.wait(8000)
   
        cy.wait(2000);
        cy.get('.fa.fa-window-close').click({force: true})
        cy.wait(5000)
       
        
        /*cy.get('.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show').click();*/ 
   
        
       /* cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible') */
   
   
       cy.wait(8000)
   
       cy.wait(2000)
   
       
   
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
        
   
        cy.wait(3000)
        cy.get('.modal_card_body').click({multiple: true});
   
        cy.wait(2000)
        cy.get('#widePopupModal .span-cross-modal').click();
   
        cy.wait(8000)
   
   
       
   
   
        
        
         
         
       })  
     
     })
   
   
   
   
   describe('Trax mines 3rd courier', () => {
   
   it('test3', () => {
   
   
       cy.visit('https://demoaccount.asaanretail.pk/login');
       cy.wait(10000)
       cy.wait(4000)
       cy.get('#email').click();
       cy.get('#email').type('mubarak.waqar1998@gmail.com');
       cy.get('#password').type('mubi@12345');
       
       cy.get('#remember').click();
       cy.get('button[type="submit"]').click();
       cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
       cy.wait(1000)
   
       cy.visit('https://demoaccount.asaanretail.pk/order');
   
   
   
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
       
       cy.visit('https://demoaccount.asaanretail.pk/order');
       cy.get('.bulkActionDiv').click();
       cy.get('.nav-buttons-bar > .btn-success').click();
       cy.wait(2000);
       const errorMessage = 'The requested product does not exist';
   
       cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
       cy.wait(2000);
       cy.get('input[name="external_order_no"]').click({force: true}); 
       cy.wait(4000);
   
   
       function getRandomTimeout(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
         
       }
   
       const Timeout = getRandomTimeout(5)
   
      function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
         const startTime = new Date().getTime();
         
         function checkValue() {
           const currentTime = new Date().getTime();
           if (currentTime - startTime > Timeout) {
             throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
           }
       
           cy.get(selector).invoke('val').then((actualValue) => {
             if (actualValue === expectedValue) {
               return cy.wrap(actualValue);
             } else {
               cy.wait(interval).then(() => checkValue());
             }
           });
       }
       
         checkValue();
    }
   
           
   
       cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
       waitForInputValue('input[name="external_order_no"]', randomKey)
       cy.get('input[name="tracking_id"]').click({ force: true });
       cy.wait(2000);
      /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
       cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
       /*cy.get('input[name="tracking_id"]').click()*/
       cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
   
      /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
       cy.wait(6000);
       
       cy.get('input[aria-label="Search"]').type('+923412106621')
       cy.wait(6000);
       cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
       .should('exist')
       .and('be.visible');    
       cy.get('li[title="Barron"]').click({multiple:true})
     
   
       cy.wait(5000)
       cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({foce:true})
       cy.get('#select2-sales_rep-container').click();
       cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
       cy.get('#select2-sales_rep-container').click();
       cy.get('td #searchProductInput').click();
       cy.wait(1000)
       cy.get('td #searchProductInput').type('{backspace}');
       cy.wait(1000)
       cy.get('td #searchProductInput').type('{backspace}');
       cy.wait(1000)
       cy.get('td #searchProductInput').type('garlic press');
       cy.wait(3000)
       cy.wait(3000)
       cy.get('#searchResults > ul > li:nth-child(1)').click();
       cy.wait(1000);
       cy.get('textarea[placeholder="Enter User Comments"]').type("snapshot")
       cy.wait(500);
       cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
       cy.wait(1000);
       
       cy.get('.fas.fa-shopping-cart.mr-5').click();
       cy.wait(20000);
   
       
       /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
       cy.get('#return_modal_pill').click({force:true})
       
       cy.wait(2000);
       cy.get('#statusButton').click()
       cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
       Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from failing the test
        return false
       })
       cy.wait(3000)
      
   
       
       cy.get('#return_modal_pill').click({force:true})
       cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
       cy.wait(3000)
       cy.get('.modal_card_body').click()
       cy.wait(3000)
   
       
      /*Trax Mines ( Trax ) */
      cy.wait(3000)
       
      cy.get('#couriers').select('Arban (Test) - Trax ( Trax )', {force: true})
      cy.wait(3000)
     
      cy.wait(3000)
   
      cy.wait(2000)
   
      cy.get("#item_description").type('Great')
      cy.wait(2000)
      cy.get("#item_description").type('{backspace}')
      /*cy.get('//input[@id='item_description']')*/
   
      
      cy.wait(3000)
      
     
      cy.wait(3000)
      
      cy.get('.scrollable_div_with_height_550').click();
   
      cy.wait(2000)
   
      cy.get('#widePopupModal .modal-content > .modal-header').click();
      cy.wait(2000)
      cy.get('.btn-block:nth-child(2)').click();
      cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
      cy.wait(5000)
   
   
      cy.wait(8000)
   
      cy.wait(2000);
      cy.get('.fa.fa-window-close').click({force: true})
      cy.wait(5000)
     
      
      /*cy.get('.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show').click();*/ 
   
      
     /* cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible') */
   
   
     cy.wait(8000)
   
     cy.wait(2000)
   
     
   
      cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
   
      cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   
      cy.wait(3000)
      cy.get('.modal_card_body').click({multiple: true});
   
      cy.wait(2000)
      cy.get('#widePopupModal .span-cross-modal').click();
   
      cy.wait(8000)
   
   
                 //else condition close
   
     })
   
   })
   
       
     
   
   
   
   
   // describe('Bluex courier', () => {
   
   //     it('test4', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
   
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   
   
   
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
   
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').click();
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
   //     const Timeout = getRandomTimeout(5)
   
   //   function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //   }
     
              
   
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //     /*cy.get('input[name="tracking_id"]').click()*/
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
   
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621')
   
   //     cy.wait(6000);
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
     
   
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({foce:true})
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').click();
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   // // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
   
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
   
       
   //    /*BLUEEX (  Blue EX ) */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('BLUEEX (  Blue EX )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
   
   //    cy.wait(2000)
   //    /*
   //    cy.get("#item_description").type('Great')
   //    cy.wait(2000)
   //    cy.get("#item_description").type('{backspace}') 
   //    */
      
   
      
   //    cy.wait(3000)
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
   
   //    cy.wait(2000)
   
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   //    cy.wait(2500)
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   //    cy.wait(5000)
   
   
   //    cy.wait(8000)
   
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   //    /*cy.get('.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show').click();*/ 
   
      
   //   /* cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible') */
   
   
   //   cy.wait(8000)
   
   //   cy.wait(2000)
   
     
   
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
   
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
   
   //    cy.wait(8000)
   
   
   //               //else condition close
   
   
     
   //     })
     
   // })
     
         
   // describe('Pakistan post', () => {
   
   //   it('test 5', () => {
   
       
   //   cy.visit('https://demoaccount.asaanretail.pk/login');
   //   cy.wait(10000)
   //   cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //   cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //   cy.wait(1000)
   
   //   cy.visit('https://demoaccount.asaanretail.pk/order');
   
   
   
   //   function generateRandomKey(length) {
   //     const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //     let result = '';
   //     for (let i = 0; i < length; i++) {
   //       result += charset.charAt(Math.floor(Math.random() * charset.length));
   //     }
   //     return result;
   //   }
   
   //   const 
     
   //   randomKey = generateRandomKey(5)
     
   //   cy.visit('https://demoaccount.asaanretail.pk/order');
   //   cy.get('.bulkActionDiv').click();
   //   cy.get('.nav-buttons-bar > .btn-success').click();
   //   cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //   cy.get('input[name="external_order_no"]').click({force: true}); 
   //   cy.wait(4000);
   
   
       
     
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
   //     const Timeout = getRandomTimeout(5) 
       
       
   
   //     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //   }
     
   
   //   cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //       waitForInputValue('input[name="external_order_no"]', randomKey)
   //   cy.get('input[name="tracking_id"]').click({ force: true });
   //   cy.wait(2000);
   //  /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
     
   //   cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //   /*cy.get('input[name="tracking_id"]').click()*/
   //   cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
   
   //  /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
     
   //   cy.wait(6000);
     
   //   cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
   
   //   cy.wait(6000);
   //       cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
   //   cy.wait(5000)
   //   cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({force:true})
   //   cy.get('#select2-sales_rep-container').click();
   //   cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //   cy.get('#select2-sales_rep-container').click();
   //   cy.get('td #searchProductInput').click();
   //   cy.wait(1000)
   //   cy.get('td #searchProductInput').type('{backspace}');
   //   cy.wait(1000)
   //   cy.get('td #searchProductInput').type('{backspace}');
   //   cy.wait(1000)
   //   cy.get('td #searchProductInput').type('garlic press');
   //   cy.wait(3000)
   //   cy.wait(3000)
   //   cy.get('#searchResults > ul > li:nth-child(1)').click();
   //   cy.wait(1000);
   //   cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //   cy.wait(1000);
   //   cy.get('.fas.fa-shopping-cart.mr-5').click();
   //   cy.wait(1000);
   //   /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //   cy.get('#return_modal_pill').click({force:true})
   //   cy.wait(2000);
   //   cy.get('#statusButton').click()
   //   cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')   
   //   Cypress.on('uncaught:exception', (err, runnable) => {
   // // returning false here prevents Cypress from failing the test
   //    return false
   //   })
   //   cy.wait(3000)
    
   
     
   //   cy.get('#return_modal_pill').click({force:true})
   //   cy.wait(3000)
   //   cy.get('.modal_card_body').click({multiple: true})
   //   cy.wait(3000)
   
     
   //  /*Pakistan Post ( Other Courier ) */
   //  cy.wait(12000)
   
   
   // //  cy.get('#couriers').type('{enter}') // Open the dropdown
   // //  .focus().select('Pakistan Post ( Other Courier )',{ force: true })
    
   //  cy.get('#couriers').type('{downArrow}') 
   //  cy.get('#couriers').select('Pakistan Post ( Other Courier )',{force:true})
   //  cy.wait(3000)
   
   //  cy.wait(3000)
   
   //  cy.wait(2000)
    
   //  cy.get("button[onclick='generateTrackingNumber()']").click();
   //  cy.wait(2000)
    
    
    
   
    
   //  cy.wait(3000)
    
   
   //  cy.wait(3000)
    
   //  cy.get('.scrollable_div_with_height_550').click();
   
   //  cy.wait(2000)
   
   //  cy.get('#widePopupModal .modal-content > .modal-header').click();
   //  cy.wait(2000)
   //  cy.get('.btn-block:nth-child(2)').click();
   //  cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   //  cy.wait(5000)
   
   
   //  cy.wait(8000)
   
   //  cy.wait(2000);
   //  cy.get('.fa.fa-window-close').click({force: true})
   //  cy.wait(5000)
   
    
   //  /*cy.get('.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show').click();*/ 
   
    
   // /* cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible') */
   
   
   // cy.wait(8000)
   
   // cy.wait(2000)
   
   
   
   //  cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
   
   //  cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   
   //  cy.wait(3000)
   //  /*cy.get('.modal_card_body').click({multiple: true});*/
   
   //  cy.wait(2000)
   //  cy.get('#widePopupModal .span-cross-modal').click();
   
   //  cy.wait(8000)
   
   
   //             //else condition close
   
   
   
   //   })
       
   
   // } )
   
   
   // describe('Call Courier', () => {
   
   
   //     it('test 6', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').click();
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(2000);
     
   
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
   
   //         const Timeout = getRandomTimeout(5)
   
   
   //     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
         
      
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //     /*cy.get('input[name="tracking_id"]').click()*/
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
   
       
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
   
   
     
   //     cy.wait(6000);
   
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
     
       
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({foce:true})
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').click();
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
       
   //     cy.wait(500)
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*Call courier booking */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('Call Courier ( Call Courier )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
     
   //    cy.wait(2000)
   
   //    cy.get("#consigneeMobNo").clear({force: true});
   
   //    cy.wait(2000)
      
   //    cy.get("#consigneeMobNo").type('3412157643',{force: true});
   //    cy.wait(2000)
      
      
      
     
      
   //    cy.wait(3000)
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   //    cy.wait(500)
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
   
   //    cy.wait(500)
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   
   
   
     
   //     })
   
   
   // describe('Steadfast ( Other Courier )', () => {
   
   //     it('test 7', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
   
       
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});;
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   
   
   
   //         function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
           
   //     const Timeout = getRandomTimeout(5)
   
   
   
   
   //     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
     
   
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //     /*cy.get('input[name="tracking_id"]').click()*/
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
       
   
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({foce:true})
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').click();
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*Steadfast ( Other Courier ) */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('Steadfast ( Other Courier )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
     
   //    cy.wait(2000)
      
   //    cy.get("button[onclick='generateTrackingNumber()']").click();
   //    cy.wait(2000)
      
      
      
     
      
   //    cy.wait(3000)
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   //    /*cy.get('.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show').click();*/ 
     
      
   //   /* cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible') */
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   
   
   
     
   //     })
     
     
   // describe('digidokan.pk ( Other Courier )', () => {
   
   
   //       it('test 8', () => {
       
           
   //       cy.visit('https://demoaccount.asaanretail.pk/login');
   //       cy.wait(10000)
   //       cy.wait(4000)
   //    cy.get('#email').should('be.visible').click();
   //    cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //    cy.get('#password').should('be.visible').type('mubi@12345');
   
   //    cy.get('#remember').click();
   //    cy.get('button[type="submit"]').click();
   //       cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //       cy.wait(1000)
       
   //       cy.visit('https://demoaccount.asaanretail.pk/order');
       
       
       
   //       function generateRandomKey(length) {
   //         const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //         let result = '';
   //         for (let i = 0; i < length; i++) {
   //           result += charset.charAt(Math.floor(Math.random() * charset.length));
   //         }
   //         return result;
   //       }
       
   //       const 
         
   //       randomKey = generateRandomKey(5)
         
   //       cy.visit('https://demoaccount.asaanretail.pk/order');
   //       cy.get('.bulkActionDiv').click();
   //       cy.get('.nav-buttons-bar > .btn-success').should('be.visible').click({force: true});
   //       cy.wait(12000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //       cy.get('input[name="external_order_no"]').click({force: true}); 
   //       cy.wait(2000);
   
          
   //       cy.wait(2000);
   
   
   
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
   
   //     const Timeout = getRandomTimeout(5)
   
   
   //     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
     
       
             
       
   //       cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //       cy.get('input[name="tracking_id"]').click({ force: true });
   //       cy.wait(2000);
   //      /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
         
   //       cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //       /*cy.get('input[name="tracking_id"]').click()*/
   //       cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
       
   //      /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
         
   //       cy.wait(6000);
         
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');   
   //     cy.wait(6000); 
   //     cy.get('li[title="Barron"]').click({multiple:true})
       
   //       cy.wait(6000);
         
       
   //       cy.wait(5000)
   //       cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({ force: true })
   //       cy.get('#select2-sales_rep-container').click({ force: true });
   //       cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //       cy.get('#select2-sales_rep-container').click();
   //       cy.get('td #searchProductInput').click();
   //       cy.wait(1000)
   //       cy.get('td #searchProductInput').type('{backspace}');
   //       cy.wait(1000)
   //       cy.get('td #searchProductInput').type('{backspace}');
   //       cy.wait(1000)
   //       cy.get('td #searchProductInput').type('garlic press');
   //       cy.wait(3000)
   //       cy.wait(3000)
   //       cy.get('#searchResults > ul > li:nth-child(1)').click();
   //       cy.wait(1000);
   //       cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //       cy.wait(1000);
   //       cy.get('.fas.fa-shopping-cart.mr-5').click();
   //       cy.wait(1000);
   //       /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //       cy.get('#return_modal_pill').click({force:true})
   //       cy.wait(2000);
   //       cy.get('#statusButton').click()
   
         
   //       cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
       
   //       Cypress.on('uncaught:exception', (err, runnable) => {
   //     // returning false here prevents Cypress from failing the test
   //        return false
   //       })
   //       cy.wait(3000)
        
       
         
   //       cy.get('#return_modal_pill').click({force:true})
   //       cy.wait(3000)
   //       cy.get('.modal_card_body').click({multiple: true})
   //       cy.wait(3000)
       
         
   //      /*digidokaan.pk ( Other Courier ) */
   //      cy.wait(3000)
         
   //      cy.get('#couriers').select('digidokaan.pk ( Other Courier )', {force: true})
   //      cy.wait(3000)
       
   //      cy.wait(3000)
       
   //      cy.wait(2000)
        
   //      cy.get("button[onclick='generateTrackingNumber()']").click();
   //      cy.wait(2000)
        
        
        
       
        
   //      cy.wait(3000)
        
       
   //      cy.wait(3000)
        
   //      cy.get('.scrollable_div_with_height_550').click();
       
   //      cy.wait(2000)
       
   //      cy.get('#widePopupModal .modal-content > .modal-header').click({force: true});
   //      cy.wait(2000)
   //      cy.get('.btn-block:nth-child(2)').click();
   //      cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //      cy.wait(5000)
       
       
   //      cy.wait(8000)
       
   //      cy.wait(2000);
   //      cy.get('.fa.fa-window-close').click({force: true})
   //      cy.wait(5000)
       
        
   //      /*cy.get('.swal2-popup.swal2-modal.swal2-icon-warning.swal2-show').click();*/ 
       
        
   //     /* cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible') */
       
       
   //     cy.wait(8000)
       
   //     cy.wait(2000)
       
       
       
   //      cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
       
   //      cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
       
   //      cy.wait(3000)
   //      /*cy.get('.modal_card_body').click({multiple: true});*/
       
   //      cy.wait(2000)
   //      cy.get('#widePopupModal .span-cross-modal').click();
       
   //      cy.wait(8000)
       
       
   //                 //else condition close
       
   //               })
     
     
     
       
   //      })
   
   
   // describe('Zamana.pk Insta world ( InstaWorld )', () => {
   
   
   //     it('test 9', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   //         cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
   //     const Timeout = getRandomTimeout(5)
   
   //     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
     
           
     
           
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //     waitForInputValue('input[name="external_order_no"]', randomKey)
           
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //     /*cy.get('input[name="tracking_id"]').click()*/
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
       
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({foce:true})
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').click();
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
       
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*Insta world */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('Zamana.pk Insta world ( InstaWorld )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
     
   //    cy.wait(2000)
   
      
   
   //    cy.get('#remarks').clear()
   
   //    cy.wait(1000)
   
   
   //    cy.get('#remarks').type('Please',{ force: true })
      
     
   //    cy.wait(2000)
      
      
      
     
      
   //    cy.wait(3000)
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
      
      
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
   
      
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
      
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   
   
   
     
   //      })
   
   // describe('AR Daewoo (Daewoo Express)', () => {
   
   // it('test 10', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   
       
   //     const  randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true});
   
   //     cy.wait(4000);
   
        
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
   //     }
       
       
   //      const Timeout = getRandomTimeout(5)
   //         function waitForInputValue(selector, expectedValue, Timeout , interval = 500) {
   //       const startTime = new Date().getTime();
       
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
       
     
     
     
     
   //      cy.wait(2000)
        
   //      cy.get('input[name="external_order_no"]').scrollIntoView().clear({ force: true })
   //      cy.wait(1000)
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true })
   //     waitForInputValue('input[name="external_order_no"]', randomKey)
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
   //    cy.get('input[name="tracking_id"]').scrollIntoView().clear({ force: true })
   //    cy.wait(1000)
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   
   //     waitForInputValue('input[name="tracking_id"]', randomKey)
   //     /*cy.get('input[name="tracking_id"]').click()*/
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
   
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
       
   //     cy.wait(6000);
       
      
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible') 
   //    cy.get('li[title="Barron"]').as('li[title="Barron"]').click({multiple:true});
   
      
     
   
       
   
       
   
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').should('be.visible').click({force:true})
       
       
   //     cy.wait(5000)
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type("garlic press").should('have.value', 'garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').should('be.visible').click({force:true});
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*AR daewoo */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('AR Daewo ( Daewoo Express )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
     
   //    cy.wait(2000)
   
      
   
   //    cy.get('#receiver_cnic').clear()
   
   //    cy.wait(2000)
   
   
   //    cy.get('#receiver_cnic').type('42201-3500056-5',{ force: true })
      
     
   //    cy.wait(2000)
      
   //    cy.get('#remarks').clear()
      
   //    cy.wait(2000)
   //    cy.get('#remarks').type('Pack carefully',{ force: true })
      
   //    cy.wait(3000)
   
   //    cy.get('#item_description').clear()
   
   //    cy.wait(2000)
      
   //    cy.get('#item_description').type('Good product',{ force: true })
   
   //    cy.wait(2000)
   
   //    cy.get('#weight').clear()
   
   //    cy.wait(2000)
   
   //    cy.get('#weight').type('5',{ force: true })
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   
   
   
     
   //      })
   
   
   
   
   
   
   
   // describe('Highfy ( PostEx )', () => {
   
   //     it('test 11', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   ///     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
   //     const Timeout = getRandomTimeout(5)
   
   //     function waitForInputValue(selector, expectedValue,Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
         
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
     
           
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true });
   //     waitForInputValue('input[name="external_order_no"]', randomKey)
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
       
   
   
   
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
   //     /*cy.get('input[name="tracking_id"]').click()*/
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   //     cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //     .should('exist')
   //     .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').should('be.visible').click({force:true});
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type("garlic press").should('have.value', 'garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').should('be.visible').click({force:true})
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*AR daewoo */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('Highfy ( PostEx )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
     
   //    cy.wait(2000)
   
      
   
      
      
     
      
      
      
      
   
   
      
   
   //    cy.wait(2000)
   
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   
   
   
     
   //      })
   
   
   
   // describe('Penta express', () => {
   
   //     it('test 12', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   
   //     cy.get('input[name="external_order_no"]').click({force: true});
   
   //     cy.wait(4000);
   
        
   
   //     function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
   //     }
   
   //      const Timeout = getRandomTimeout(5)
   
   
   
   
   
   
   //     function waitForInputValue(selector, expectedValue, Timeout, interval=500) {
   //             const startTime = new Date().getTime();
             
   //             function checkValue() {
   //               const currentTime = new Date().getTime();
   //               if (currentTime - startTime > Timeout) {
   //                 throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //               }
             
   //               cy.get(selector).invoke('val').then((actualValue) => {
   //                 if (actualValue === expectedValue) {
   //                   return cy.wrap(actualValue);
   //                 } else {
   //                   cy.wait(interval).then(() => checkValue());
   //                 }
   //               });
   //             }
             
   //             checkValue();
   //    }
             
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true }); 
   //     waitForInputValue('input[name="external_order_no"]', randomKey)
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
     
           
     
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true })
   //    /* cy.get('input[name="tracking_id"]').click({ force: true });*/
   //     cy.wait(2000);
      
       
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   
   //         Cypress.on('uncaught:exception', (err, runnable) => {
   //       // returning false here prevents Cypress from failing the test
   //          return false
   //         })
   
   //       cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //         .should('exist')
   //         .and('be.visible');    
   //     cy.get('li[title="Barron"]').click({multiple:true})
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').should('be.visible').click({force:true});
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press').should('have.value', 'garlic press');
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').should('be.visible').click({force:true});;
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*penta ( PentaExpress ) */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('penta ( PentaExpress )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
   
   //    cy.get("#weight").clear()
   
   //    cy.get("#weight").type('5', {force: true})
     
   //    cy.wait(2000)
   
   
   //    cy.get("#REMARKS").type("Please", {force: true})
   
   
   //    cy.wait(2000)
   
      
   //    cy.get("#item_description").type("Non custom", {force: true})
      
      
     
      
      
      
      
   
   
      
   
      
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   
   
   
     
   //      })
   
   // describe('Rasheed (MXC)', () => {
   
   //      it('test 13', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //         Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(5000)
      
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
   
   //         Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
       
      
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
   //         Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(3000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   
   
   //     function getRandomTimeout(min, max) {
   //             return Math.floor(Math.random() * (max - min + 1)) + min;
               
   //           }
   
   //           const Timeout = getRandomTimeout(5)     
       
   //     function waitForInputValue(selector, expectedValue, Timeout, interval = 500) {
   //             const startTime = new Date().getTime();
             
   //             function checkValue() {
   //               const currentTime = new Date().getTime();
   //               if (currentTime - startTime > Timeout) {
   //                 throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //               }
             
   //               cy.get(selector).invoke('val').then((actualValue) => {
   //                 if (actualValue === expectedValue) {
   //                   return cy.wrap(actualValue);
   //                 } else {
   //                   cy.wait(interval).then(() => checkValue());
   //                 }
   //               });
   //             }
             
   //             checkValue();
   //       }
   
           
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true,delay: 0  }).should('have.value', randomKey); // Assertion to verify input field is filled;
   //     waitForInputValue('input[name="external_order_no"]', randomKey)
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
      
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true ,delay: 0 }).should('have.value', randomKey); // Assertion to verify input field is filled;
       
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //             // returning false here prevents Cypress from failing the test
   //                return false
   //               })
   //               cy.get('li[title="Barron"]', {Timeout}) // Wait for up to 20 seconds
   //               .should('exist')
   //               .and('be.visible');
   //     cy.get('li[title="Barron"]').click()
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({force:true})
   //     cy.get('#selectCustomerAddressModal .close').click({force:true});
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press').should('have.value', 'garlic press');
   //     cy.wait(3000)
       
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)')
   //   .should('be.visible') // Wait until the element is visible
   //   .click()
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
   //         cy.get('#return_modal_pill', { timeout: 20000 }) // Increase timeout to 20 seconds
   //   .should('be.visible');
     
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*Rasheed ( MXC ) */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('Rasheed ( MXC )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
   
   //    cy.get("#weight").clear({force: true})
   
   //    cy.get("#weight").type('5', {force: true})
     
   //    cy.wait(2000)
   
   
   //    cy.get("#consignmentremarks").type("Please", {force: true})
   
   
   //    cy.wait(2000)
   
      
   //    cy.get("#item_description").type("Non custom", {force: true})
      
      
     
      
      
      
      
   
   
      
   
      
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   // })
   
   
   
   // describe('Pathao courier', () => {
   
   //      it('test 14', () => {
     
         
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //       // returning false here prevents Cypress from failing the test
   //          return false
   //         })
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //       // returning false here prevents Cypress from failing the test
   //          return false
   //         })
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(3000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   
   
   
   //         function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
      
   //     const Timeout = getRandomTimeout(5)
   
   //     function waitForInputValue(selector, expectedValue, Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
       
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //     }
       
     
           
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true }).should('have.value', randomKey); // Assertion to verify input field is filled;
   //     waitForInputValue('input[name="external_order_no"]', randomKey);
   //     cy.get('input[name="tracking_id"]').click({force: true});
   //     cy.wait(2000);
   //    /* cy.get('.form-group:nth-child(7) > .form-control').type(randomKey);*/
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true }).should('have.value', randomKey); // Assertion to verify input field is filled;;
       
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //       // returning false here prevents Cypress from failing the test
   //          return false
   //         })
   //         cy.get('li[title="Barron"]', { Timeout}) // Wait for up to 20 seconds
   //         .should('exist')
   //         .and('be.visible');
   //         cy.get('li[title="Barron"]').click({force: true})
     
   //     cy.wait(5000)
       
       
   
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({force:true})
   //     cy.get('#selectCustomerAddressModal .close').click({force:true});
   //     cy.get('#select2-sales_rep-container').click({force:true});
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press').should('have.value', 'garlic press');
   //     cy.wait(3000)
   //     cy.wait(5000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').should('be.visible').click({force:true}); // Wait until the element is visible
          
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   //     cy.wait(2000);
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(5000)
      
     
   //     cy.get('#return_modal_pill', { timeout: 20000 }) // Increase timeout to 20 seconds
   //   .should('be.visible');
   
   //     cy.wait(2000)
   
   //     cy.get('#return_modal_pill').click({force: true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*Pathao ( Pathao Courier ) */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('Pathao ( Pathao Courier )', {force: true})
   //    cy.wait(4000)
     
   //    cy.wait(3000)
   
   //    Cypress.on('uncaught:exception', (err, runnable) => {
   //     // returning false here prevents Cypress from failing the test
   //        return false
   //       })
   
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(10000)   
   
   //    /*cy.get("#pathao > div:nth-child(12) > div.col-sm-12 > div:nth-child(1) > div > div:nth-child(5) > span").click({multiple: true})*/
   
   //    cy.get("#select2-pathao_destinationCityName-container").click({force: true})
      
      
   
   
   //    cy.get("input[aria-label='Search']").type('Bagerhat{enter}', {force: true})
   
      
   //    cy.wait(5000)
   //      cy.wait(6000)
      
    
   
   //    cy.wait(3000)
   
   //    cy.wait(3000)
   //    cy.get("#weight").clear()
   
   //    cy.get("#weight").type('5', {force: true})
     
   //    cy.wait(2000)
   
   
   //    cy.get("#special_instruction").type("Please", {force: true})
   
   //    cy.wait(1000)
   
   //    cy.get("#codAmount").clear({force: true})
   
   //    cy.wait(1000)
   
   //    cy.get("#codAmount").type("270",{force: true})   
   //    cy.wait(2000)
   
      
   //    cy.get("#item_description").type("Non custom", {force: true})
      
   //    cy.wait(3000)
   
   //    cy.get(".flag-container").click({multiple: true})
   
   //    cy.wait(3000)
   
   //    cy.get(".country[data-dial-code='880']").click({force:true})
   
   //    cy.wait(1000)
   
   //    cy.get("#consigneeMobNo").clear({force: true})
   
   //    cy.wait(1000)
   
   //    cy.get("#consigneeMobNo").type("1753-294929",{force: true})
     
   //    cy.wait(2000)
      
      
      
   
   
      
   
      
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   // })
   
   
   
   
   
   
   
   // describe('Rider', () => {
   
   //      it('test 15', () => {
          
   //     cy.visit('https://demoaccount.asaanretail.pk/login');
   //     cy.wait(10000)
   //     cy.wait(4000)
   //     cy.get('#email').should('be.visible').click();
   //     cy.get('#email').type('mubarak.waqar1998@gmail.com');
   //     cy.get('#password').should('be.visible').type('mubi@12345');
   
   //     cy.get('#remember').click();
   //     cy.get('button[type="submit"]').click();
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //       // returning false here prevents Cypress from
   //       // failing the test
   //       return false;
   //     });
       
   //     cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
   //     cy.wait(1000)
     
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
     
     
     
   //     function generateRandomKey(length) {
   //       const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   //       let result = '';
   //       for (let i = 0; i < length; i++) {
   //         result += charset.charAt(Math.floor(Math.random() * charset.length));
   //       }
   //       return result;
   //     }
     
   //     const 
       
   //     randomKey = generateRandomKey(5)
       
   //     cy.visit('https://demoaccount.asaanretail.pk/order');
   //     cy.get('.bulkActionDiv').should('be.visible').click({force: true});
   //     cy.get('.nav-buttons-bar > .btn-success').click();
   //     cy.wait(2000);
   //     const errorMessage = 'The requested product does not exist';
   
   //     cy.contains(errorMessage).should('not.exist', 'Expected error message not found');
   //     cy.wait(2000);
   //     cy.get('input[name="external_order_no"]').click({force: true}); 
   //     cy.wait(4000);
   
   
   
   //         function getRandomTimeout(min, max) {
   //       return Math.floor(Math.random() * (max - min + 1)) + min;
         
   //     }
   
       
   //     const Timeout = getRandomTimeout(5)
   
   //     function waitForInputValue(selector, expectedValue, Timeout, interval = 500) {
   //       const startTime = new Date().getTime();
       
   //       function checkValue() {
   //         const currentTime = new Date().getTime();
   //         if (currentTime - startTime > Timeout) {
   //           throw new Error(`Timed out after ${Timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
   //         }
       
   //         cy.get(selector).invoke('val').then((actualValue) => {
   //           if (actualValue === expectedValue) {
   //             return cy.wrap(actualValue);
   //           } else {
   //             cy.wait(interval).then(() => checkValue());
   //           }
   //         });
   //       }
       
   //       checkValue();
   //       }
           
     
   //     cy.get('input[name="external_order_no"]').scrollIntoView().type(randomKey,{ force: true })
   //     waitForInputValue('input[name="external_order_no"]', randomKey);
   //     cy.get('input[name="tracking_id"]').click({ force: true });
   //     cy.wait(2000);
      
       
   //     cy.get('input[name="tracking_id"]').scrollIntoView().type(randomKey,{ force: true });
       
   //     cy.get('#select2-customer_order_dropdown-container').click({multiple: true});
     
   //    /* cy.get('#invoiceForm > div.row.row-order-create-modal > div:nth-child(7) > input').click({multiple: true});*/
       
   //     cy.wait(6000);
       
   //     cy.get('input[aria-label="Search"]').type('+923412106621').should('have.value', '+923412106621')
     
   //     cy.wait(6000);
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //             // returning false here prevents Cypress from failing the test
   //                return false
   //               })
   //               cy.get('li[title="Barron"]', { Timeout }) // Wait for up to 20 seconds
   //               .should('exist')
   //               .and('be.visible');
   //     cy.get('li[title="Barron"]').click({force:true})
   
       
     
   //     cy.wait(5000)
   //     cy.get('#selectCustomerAddressModal > div > div > div > div:nth-child(2) > button').click({force:true})
   //     cy.get('#selectCustomerAddressModal .close').click({force:true});
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('.select2-search.select2-search--dropdown').type('AsaanRetail');
   //     cy.get('#select2-sales_rep-container').click();
   //     cy.get('td #searchProductInput').click();
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('{backspace}');
   //     cy.wait(1000)
   //     cy.get('td #searchProductInput').type('garlic press').should('have.value', 'garlic press');;
   //     cy.wait(3000)
   //     cy.wait(3000)
   //     cy.get('#searchResults > ul > li:nth-child(1)').should('be.visible').click({force:true});;
   //     cy.wait(1000);
   //     cy.get('#invoiceForm > div:nth-child(7) > div > div.col-sm-4.text-right.pr-20 > div > div > button').click();
   //     cy.wait(1000);
   //     cy.get('.fas.fa-shopping-cart.mr-5').click();
   //     cy.wait(1000);
   //     /*cy.get('#widePopupModal > div > div > div.modal-header > div:nth-child(2) > button').click()*/
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(2000);
   //     cy.get('#statusButton').click()
   
   
   //     cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //     Cypress.on('uncaught:exception', (err, runnable) => {
   //   // returning false here prevents Cypress from failing the test
   //      return false
   //     })
   //     cy.wait(3000)
      
   //         cy.get('#return_modal_pill', { Timeout }) // Increase timeout to 20 seconds
   //   .should('be.visible');
       
   //     cy.get('#return_modal_pill').click({force:true})
   //     cy.wait(3000)
   //     cy.get('.modal_card_body').click({multiple: true})
   //     cy.wait(3000)
     
       
   //    /*AR-Rider ( Rider ) */
   //    cy.wait(3000)
       
   //    cy.get('#couriers').select('AR-Rider ( Rider )', {force: true})
   //    cy.wait(3000)
     
   //    cy.wait(3000)
   
   //    cy.get("#weight").clear({force: true})
   
   //    cy.get("#weight").type('5', {force: true})
     
   //    cy.wait(2000)
   
   //    cy.get("#Description").clear({force: true})
   //    cy.get("#Description").type("Please", {force: true})
   
   
   //    cy.wait(2000)
   
   //    cy.get("#remarks").clear({force: true})
   //    cy.get("#remarks").type("Non custom", {force: true})
      
   //    cy.wait(2000)
   //    cy.get("#consigneeMobNo").clear({force: true})
   //    cy.get("#consigneeMobNo").type("3412106623", {force: true})
      
      
      
      
   
   
      
   
      
      
     
   //    cy.wait(3000)
      
   //    cy.get('.scrollable_div_with_height_550').click();
     
   //    cy.wait(2000)
     
   //    cy.get('#widePopupModal .modal-content > .modal-header').click();
   //    cy.wait(2000)
   //    cy.get('.btn-block:nth-child(2)').click();
   
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
   //    cy.wait(5000)
     
     
   //    cy.wait(8000)
     
   //    cy.wait(2000);
   //    cy.get('.fa.fa-window-close').click({force: true})
   //    cy.wait(5000)
     
      
   
     
     
   //   cy.wait(8000)
     
   //   cy.wait(2000)
     
     
     
   //    cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
     
   //    cy.get('div.toast-notifications > div > div.snackbar-content > div > .toast-title').contains('Task Completed Successfully')
     
     
   //    cy.wait(3000)
   //    /*cy.get('.modal_card_body').click({multiple: true});*/
     
   //    cy.wait(2000)
   //    cy.get('#widePopupModal .span-cross-modal').click();
     
   //    cy.wait(8000)
     
     
   //               //else condition close
     
   //             })
   // })