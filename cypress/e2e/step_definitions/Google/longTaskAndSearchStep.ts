import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { googleSearchPage } from "../../pages/Google/googleSearchPage";
import { googleResultsPage } from "../../pages/Google/googlePage";

Given(/^I execute a long task in my database$/, () => {
  // executeCommand('db-command-long-task');
});

When(/^Press 'Search'$/, () => {
  googleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  googleResultsPage.expect().toHaveResults();
});
