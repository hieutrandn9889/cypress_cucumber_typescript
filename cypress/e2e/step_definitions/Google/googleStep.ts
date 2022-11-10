/// <reference types="Cypress" />
import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { googleSearchPage } from "../../pages/Google/googleSearchPage";

Given(/^I'm at Google$/, () => {
  googleSearchPage.visit();
});

When(/^I type search word 'github'$/, () => {
  googleSearchPage.type("github");
});
