import cypress = require("cypress");

describe("Navigation to new windows Head-to-Head", () => {
  it("Navigation to new windows Head-to-Head", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/links");
    cy.get("#button-the-kitchen-table").invoke("removeAttr", "target").click();
    cy.location("pathname").should("eq", "/ingredients/table");
    cy.get("#fruits-vegetables:visible").should("have.length", 1);
    cy.get("#column-button-name").click();
  });
});
