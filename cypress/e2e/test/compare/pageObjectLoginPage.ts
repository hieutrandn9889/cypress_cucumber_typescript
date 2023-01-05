import cypress = require("cypress");
import { loginPage } from "./loginPage";

describe("Api request", () => {
  it("Api request", () => {
    loginPage.load();
    loginPage.login("filip", "testing");
  });
});
