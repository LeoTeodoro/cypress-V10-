import { When, Then } from "cypress-cucumber-preprocessor/steps";
import Products from "../../../support/Pages/Products/index";

When(/^I list all products$/, () => {
  Products.getProducts();
});

Then(/^all products must be listed$/, () => {
  Products.checkStatus();
});
