import { loginUI } from "../interfaces/loginUI";
export const loginPage = {
  load() {
    cy.visit("https://demo.applitools.com");
    return this;
  },

  login(username: string, password: string) {
    cy.get(loginUI.username).type(username);
    cy.get(loginUI.password).type(password);
    cy.get(loginUI.log_in).click();
  },
};
