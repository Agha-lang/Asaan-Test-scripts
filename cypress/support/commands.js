// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


///   <reference types="cypress" />

///   <reference types="Cypress-xpath" />
import 'cypress-plugin-tab';

import './commands';

require('cypress-plugin-tab')

describe('Some name of the test suite', function(  username, password)  {
    before('Before the test clear previous Cookies', () => {
        cy.visit('https://demoaccount.asaanretail.pk/login');
        cy.wait(10000)
        cy.get('.form-group .input-field').click();
        cy.get('.form-group .input-field').type(username);
        cy.get('.password-input .input-field').type(password);
        cy.get('label').click();
        cy.get('#remeberme').click();
        cy.get('.login-button').click();
        cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
        cy.wait(1000)
        cy.visit('https://demoaccount.asaanretail.pk/order');
  
    }) 
  
  
  })

  Cypress.Commands.add('login', (username, password) => {
        cy.visit('https://demoaccount.asaanretail.pk/login');
        cy.wait(10000)
        cy.get('.form-group .input-field').click();
        cy.get('.form-group .input-field').type(username);
        cy.get('.password-input .input-field').type(password);
        cy.get('label').click();
        cy.get('#remeberme').click();
        cy.get('.login-button').click();
        cy.url().should('contains', 'https://demoaccount.asaanretail.pk/home');
        cy.wait(1000)
        cy.visit('https://demoaccount.asaanretail.pk/order');
  
    // Add any additional login steps if needed
});

module.exports = {
    // Other configurations...
    pageLoadTimeout: 90000, // Increase to 90 seconds


    


    
};


function waitForInputValue(selector, expectedValue, timeout = 10000, interval = 500) {
    const startTime = new Date().getTime();
  
    function checkValue() {
      const currentTime = new Date().getTime();
      if (currentTime - startTime > timeout) {
        throw new Error(`Timed out after ${timeout}ms: expected '${selector}' to have value '${expectedValue}', but the value was not set`);
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
  
  

