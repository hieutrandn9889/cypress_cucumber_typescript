import cypress = require("cypress");

describe("Api request", () => {
  it("Api request", () => {
    cy.request("https://kitchen.applitools.com/").then(
      ({ status, body, duration }) => {
        expect(status).to.equal(200);
        // expect(body.data).to.have.length.greaterThan(0);
        expect(duration).to.be.greaterThan(0);
      }
    );
  });
});
