describe('Import order from shopify', () => {

    it('test1', () => {

       
        cy.visit('https://www.shopify.com/');
        cy.wait(2000);
        cy.get('ul[class="nav:hidden flex items-center mr-[-15px]"] button[aria-label="Menu"]').click()
        cy.get('a[class="inline-block self-center overflow-hidden max-w-full px-button-px py-button-py ring-inset rounded-button text-button-size font-button-font font-button-weight tracking-button-tracking transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-state-focus focus-visible:outline hover:ring-1 disabled:hover-ring-0 md:px-button-lg-px md:py-button-lg-py md:text-button-lg-size border-2 text-button-dark-secondary-text bg-button-dark-secondary-bg border-button-dark-secondary-border ring-current hover:text-button-dark-secondary-text-hover hover:bg-button-dark-secondary-bg-hover hover:border-button-dark-secondary-border-hover hover:ring-button-dark-secondary-border-hover focus:text-button-dark-secondary-text-focus focus:bg-button-dark-secondary-bg-focus focus:border-button-dark-secondary-border-focus focus:ring-button-dark-secondary-border-focus active:text-button-dark-secondary-text-active active:bg-button-dark-secondary-bg-active active:border-button-dark-secondary-border-active active:ring-button-dark-secondary-border-active disabled:text-button-dark-secondary-text-disabled disabled:bg-button-dark-secondary-bg-disabled disabled:border-button-dark-secondary-border-disabled disabled:ring-button-dark-secondary-border-disabled w-full"]').click({force: true});
        cy.wait(8000);


        cy.get('#challenge-stage').click();
        cy.get('#challenge-stage').click();
        cy.get('#challenge-stage').click();


        cy.wait(8000);

        // Retry cy.visit with failOnStatusCode: false
        cy.visit('https://admin.shopify.com/', { failOnStatusCode: false }).then((response) => {
    // Check if the response status code is 403 (Forbidden)
            if (response.status === 403) {
        // Handle the 403 Forbidden error as needed
        // For example, log an error message or perform additional actions
        cy.wait(8000)
        cy.log('Received a 403 Forbidden error. Access to the Shopify admin portal is denied.');
            } else {
        // Continue with your test logic for successful navigation
        // For example, assert that the page contains specific elements
                cy.contains('Welcome to the Shopify admin portal').should('be.visible');
        }

        cy.get('#challenge-stage > div > label > span.mark').click()
        cy.get('#challenge-stage').click();
        cy.get('#challenge-stage > div > label > span.ctp-label').click()
});


      /*  cy.visit('https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/flow/ov1/487847149:1709817794:_JpICjv9mPEkpQe2pfyhjxN6uyLaeRRMicwp6fqtCfs/860b4cb4ee3d0095/71f66d6856c611c')*/

        cy.get('#challenge-stage > div > label > span.mark').click()

        cy.get('#challenge-stage > div > label > span.ctp-label').click()


       /* cy.visit('https://admin.shopify.com/');*/


        cy.get('.\_GradientBackground__noise_op2vl_120').click();

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
                 return false
                })
        cy.url().should('contains', 'https://admin.shopify.com/store/33d900');
        cy.get('.Polaris-Navigation__ListItem:nth-child(2) .Polaris-Navigation__Text').click();
        cy.get('.Polaris-Button--variantPrimary').click();
        cy.get('#productPicker').click();
        cy.get('#productPicker').type('b');
       /*/* cy.get('#\3Arcr\3A').type('baby blanket');*/
        cy.get('.\_Root_s76bm_1:nth-child(1) .Polaris-BlockStack > .Polaris-InlineStack').click();
        cy.get('.Polaris-Button--variantPrimary').click();
      /* /* cy.get('#\3Arcl\3A').click(); */ 
        cy.get('.Polaris-Button__Icon:nth-child(2) .Polaris-Icon__Svg').click();
        cy.get('.Polaris-Box:nth-child(2) .Polaris-ActionList__Text').click();
        cy.get('.Polaris-Button--loading').click(); 
        
  
  
    })
})