import { Given } from "cypress-cucumber-preprocessor/steps";

import { Environments } from "../../../support/functions";

const url = new Environments().getEnv();

console.log("checking environment", url);

Given("I open Facebook page", () => {
  cy.visit(url);
});
