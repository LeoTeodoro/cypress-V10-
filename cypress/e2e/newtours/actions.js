import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/Pages/HomePage/index";

Given(/^I am on the newtours home page$/, () => {
  HomePage.acessPage();
});

When(/^I check the title$/, () => {
  HomePage.checkTitle();
});

Then(/^The title page should be Mercury Tours$/, () => {
  HomePage.checkTitle();
});
