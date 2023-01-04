import cypress = require("cypress");

describe("Waiting Head-to-Head", () => {
  it("Waiting Head-to-Head", () => {
    cy.visit("https://automationbookstore.dev");
    cy.get("#searchBar").type("testing");
    cy.get("li:visible").should("have.length", 1);
  });
});
