import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { googleSearchPage } from "../../pages/Google/googleSearchPage";
import googleResultsPage from "../../pages/Google/googlePage";

When(/^Press 'Search'$/, () => {
  googleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  googleResultsPage.expect().toHaveResults();
});
