import googleUI from "../interfaces/Google/googleUI";

describe("Use JSON fixture", () => {
  it("adds todos following the fixture", () => {
    cy.visit("https://www.facebook.com/");
    cy.fixture("account.json").then((jsonData) => {
      console.log("userTest", jsonData.userTest.username);
      cy.loginTestUserName(
        jsonData.userTest.username,
        jsonData.userTest.password
      );
    });
  });
});

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
