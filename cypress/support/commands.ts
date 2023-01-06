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
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "cypress-file-upload";
import googleUI from "../e2e/interfaces/Google/googleUI";

declare global {
  namespace Cypress {
    interface Chainable {
      loginTestUserName(username: string, password: string): Chainable<any>;
    }
  }
}

Cypress.Commands.add(
  "loginTestUserName",
  (username: string, password: string) => {
    cy.get(googleUI.username).type(username);
    cy.get(googleUI.password).type(password);
  }
);
