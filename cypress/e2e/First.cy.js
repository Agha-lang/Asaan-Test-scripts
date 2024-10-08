describe('My First Test', () => {
    it('test1', () => {
      cy.visit('https://demoaccount.asaanretail.pk/login');
      cy.get('.form-group .input-field').click();
      cy.get('.form-group .input-field').type('mubarak.waqar1998@gmail.com');
      cy.get('.password-input .input-field').type('mubi@12345');
      cy.get('label').click();
      cy.get('#remeberme').click();
      cy.get('.login-button').click();
      cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
      cy.visit('https://demoaccount.asaanretail.pk/order');

      
     
      /*cy.url().should('contains', 'https://wchat.freshchat.com/widget/config_iframe.html');*/
      cy.visit('https://demoaccount.asaanretail.pk/order');
      cy.get('.bulkActionDiv').click();
      cy.get('.nav-buttons-bar > .btn-success').click();
      cy.get('.col-sm-2:nth-child(6) > .form-control').click(); 
     /* cy.get('#order_upper_part_container > .row').click(); */
      cy.get('.nav-buttons-bar > .btn-success').click();
      cy.get('.col-sm-2:nth-child(6) > .form-control').click();
      cy.get('.col-sm-2:nth-child(6) > .form-control').type('TT4356');
      cy.get('.form-group:nth-child(7) > .form-control').click();
      cy.get('.form-group:nth-child(7) > .form-control').type('TT8456');
      cy.get('#select2-customer_order_dropdown-container').click();
      cy.get('#select2-sales_rep-container').click();
      cy.get('td #searchProductInput').click();
      cy.get('td #searchProductInput').type('{backspace}');
      cy.get('td #searchProductInput').type('{backspace}');
      cy.get('td #searchProductInput').type('garlic press');
      cy.get('#invoiceForm').click();

    })

   /* it('Create Single order', () => {
        cy.visit('https://demoaccount.asaanretail.pk/order');
        cy.get('#order_upper_part_container > .row').click();
        cy.get('.nav-buttons-bar > .btn-success').click();
        cy.get('.col-sm-2:nth-child(6) > .form-control').click();
        cy.get('.col-sm-2:nth-child(6) > .form-control').type('TT4356');
        cy.get('.form-group:nth-child(7) > .form-control').click();
        cy.get('.form-group:nth-child(7) > .form-control').type('TT8456');
        cy.get('#select2-customer_order_dropdown-container').click();
        cy.get('#select2-sales_rep-container').click();
        cy.get('td #searchProductInput').click();
        cy.get('td #searchProductInput').type('{backspace}');
        cy.get('td #searchProductInput').type('{backspace}');
        cy.get('td #searchProductInput').type('garlic press');
        cy.get('#invoiceForm').click();
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.vsc-initialized').type('{downarrow}');
        cy.get('.open > .btn').click();
        cy.get('#invoiceButton').click();
        cy.get('#invoiceForm').submit();
        cy.get('#widePopupModal > .modal-dialog > .modal-content > .modal-header .close').click();

     
     

      
    })*/
  })