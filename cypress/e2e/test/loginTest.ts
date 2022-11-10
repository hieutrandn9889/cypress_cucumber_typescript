// describe("Hello Cypress, This is Applitools", () => {
//   it("works excel ", () => {
//     cy.fixture("account.json").as("account");
//     cy.get("@account").then((user) => {
//       cy.loginTestUserName(
//         user.userTest.username,
//         user.userTest.password,
//         user.userTest.url
//       );
//     });
//   });
// });
import googleUI from "../interfaces/Google/googleUI";

// describe("Use JSON fixture", () => {
//   it("adds todos following the fixture", () => {
//     cy.visit("https://www.facebook.com/");
//     cy.fixture("account.json").then((userTest) => {
//       // cy.loginTestUserName(userTest.username, userTest.password);
//       cy.get(googleUI.username).type(userTest.username);
//       cy.get(googleUI.password).type(userTest.password);
//     });
//   });
// });

// describe("Use JSON fixture", () => {
//   it("adds todos following the fixture", () => {
//     cy.visit("https://www.facebook.com/");
//     cy.fixture("todos.json")
//       .its("todos")
//       .should("be.an", "array")
//       .then((todos) => {
//         todos.forEach((todo) => {
//           cy.get(googleUI.username).type(todo.username);
//         });
//       });
//   });
// });
