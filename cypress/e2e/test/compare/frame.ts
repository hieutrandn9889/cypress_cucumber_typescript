import cypress = require("cypress");

describe("Inline Frames Head-to-Head", () => {
  it("Inline Frames Head-to-Head", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/iframe");
    cy.get("iframe[#the-kitchen-table]")
      .find("#fruits-vegetables")
      .should("be.visible");
  });
});
