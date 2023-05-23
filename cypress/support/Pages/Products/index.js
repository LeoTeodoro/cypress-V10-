const elements = require("./elements").ELEMENTS;
import "cypress-plugin-api";

class Products {
  getProducts() {
    cy.api("GET", "https://fakestoreapi.com/products").as("products");
  }

  checkStatus() {
    cy.get("@products").its("status").should("be.equal", 200);
  }
}
export default new Products();
