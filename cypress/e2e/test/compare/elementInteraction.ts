import cypress = require("cypress");

describe("Element Interaction Head-to-Head", () => {
  it("Element Interaction Head-to-Head", () => {
    cy.visit("https://demo.applitools.com/");
    cy.get("#username").type("filip");
    cy.get("#password").type("i<3slovakia!");
    cy.get("#log-in").click();
    cy.contains(".element-header", "Financial Overview");
  });
});
