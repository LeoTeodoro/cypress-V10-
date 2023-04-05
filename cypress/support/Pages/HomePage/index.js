const elements = require("./elements").ELEMENTS;

class HomePage {
  acessPage() {
    cy.visit("demo.guru99.com/test/newtours/");
  }

  checkTitle() {
    cy.title().should("eq", "Welcome: Mercury Tours");
  }
}

export default new HomePage();
