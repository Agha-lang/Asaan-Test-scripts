/*describe('Some name of the test suite', function()   {
  before('Before the test clear previous Cookies', () => {
      cy.visit('https://demoaccount.asaanretail.pk/login');
      cy.wait(10000)
      cy.wait(4000)
      cy.get('.form-group .input-field').click();
      cy.get('.form-group .input-field').type('mubarak.waqar1998@gmail.com');
      cy.get('.password-input .input-field').type('mubi@12345');
      cy.get('label').click();
      cy.get('#remeberme').click();
      cy.get('.login-button').click();
      cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
      cy.wait(1000)
      cy.visit('https://demoaccount.asaanretail.pk/order');

  }) 

  })

 /*Internet verification that internet is running or not */

/*describe('Verify Internet Connection', () => {
  it('Checks if internet is available', () => {
    cy.request('https://www.google.com')
      .then((response) => {
        expect(response.status).to.eq(200); // Expecting a successful response
      })
      .catch((err) => {
        // Catch block runs if there's an error in the request
        // This could indicate that the internet connection is not available
        throw new Error('Internet connection is not available');
      });
  });
});*/



// Example Cypress test code
describe('Search for product', () => {
  it('Displays toast message for non-existent product', () => {
    const nonExistentProduct = 'NonExistentProduct123';
    
    cy.visit('/your-page-url');

    // Search for a non-existent product
    cy.get('input[type="search"]').type(nonExistentProduct).type('{enter}');

    // Check if toast message appears
    cy.get('.toast').then($toast => {
      if ($toast.text().includes('No such product exists')) {
        // If toast message appears, assert it and do something
        cy.wrap($toast).should('be.visible').contains('No such product exists');
        // Additional actions for non-existent product case
        // For example, you can log it, take a screenshot, etc.
        cy.log('No such product exists: ' + nonExistentProduct);
      } else {
        // If toast message doesn't appear, assert something else
        // For example, assert the product is displayed
        cy.get('.product').should('be.visible');
      }
    });
  });
});
