import cypress = require("cypress");
import { loginPage } from "./pages/loginPage";

describe("Api request", () => {
  it("Api request", () => {
    loginPage.load();
    loginPage.login("filip", "testing");
  });
});
