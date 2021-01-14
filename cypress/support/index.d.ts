// load type definitions that come with Cypress module
/// <reference types="cypress" />


declare namespace Cypress {
  import { User } from './models/index';
  interface Chainable{
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
      */
      dataCy(value: string): Chainable<Element>


    /**
     * Custom command to hit api and get user by id response.
     * @example cy.apires('greeting')
     */
    apires(value: string): Chainable<User>;

    /**
     * Custom command to hit api and get user by id response.
     * @example cy.hitapi('greeting')
     */
    hitapi(value: string): Chainable<Response>;

    /**
     * Custom command to visit google.
     * @example cy.google()
     */
    google(): Chainable<Window>;
    /**
     * Custom command to navigate to page.
     * @example cy.navigate('pageName')
     */
    navigate(pageName: string): void;
  }
}
