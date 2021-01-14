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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("apires", (apiurl) => { 
    return cy.request(apiurl);
})

Cypress.Commands.add("hitapi", (apiurl) => { 
  return cy.request(apiurl);
})

/**
 * Goes to google site
 */
Cypress.Commands.add('google', () => cy.visit('https://google.com'))

/**
 * Navigates to page with pageName
 */
Cypress.Commands.add('navigate', (pageName) => {
  // Find navigation menu item
  // Click on it
  cy.visit(`/${pageName}`)
});

// Convert this to a module instead of script (allows import/export)
// export {}