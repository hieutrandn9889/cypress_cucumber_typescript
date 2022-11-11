import googleUI from "../../interfaces/Google/googleUI";

export class googleResultsPage {
  static expect() {
    return {
      toHaveResults: () => {
        cy.get(googleUI.RESULT_LINK)
          .its("length")
          .then((length) => {
            expect(length).to.be.greaterThan(5);
          });
      },
    };
  }
}
