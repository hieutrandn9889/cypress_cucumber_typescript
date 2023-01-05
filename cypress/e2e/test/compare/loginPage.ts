export const loginPage = {
  username: "#username",
  password: "#password",
  log_in: "#log-in",

  load() {
    cy.visit("https://demo.applitools.com");
    return this;
  },

  login(username: string, password: string) {
    cy.get(this.username).type(username);
    cy.get(this.password).type(password);
    cy.get(this.log_in).click();
  },
};
