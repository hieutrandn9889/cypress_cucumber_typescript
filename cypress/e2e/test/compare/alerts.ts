import cypress = require("cypress");

describe("Alerts Head-to-Head", () => {
  it("Accept Head-to-Head", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/alert");
    cy.get("#alert-button").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.eq("Airfryers can make anything!");
    });
  });

  it("Dismiss Head-to-Head", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/alert");
    const dismiss = () => false;
    cy.get("#confirm-button").click();
    cy.on("window:confirm", dismiss);
  });

  it("Answer Head-to-Head", () => {
    cy.visit("https://kitchen.applitools.com/ingredients/alert", {
      onLoad(win: Window) {
        cy.stub(win, "prompt").returns("hieu tran testing ");
      },
    });
    cy.get("#prompt-button").click();
  });
});
