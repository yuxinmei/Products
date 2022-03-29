// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  const url = "http://localhost:3000/";
  it("get the list", () => {
    cy.visit(url);
  
  });

  it("search button", () => {
    cy.visit(url);
    cy.get(".el-input__inner").type("Mae").should("have.value", "Mae");

    cy.contains("search").click();

    cy.request(url + "/api/products").should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("delete button", () => {
    cy.visit(url);
    console.log(cy);
    cy.contains("Delete").click({ force: true });

    cy.request(url)
      .its("body.0") // yields the first element of the returned list
      .as("data") // saves the object in the test context
      .then(function () {
        cy.request(url + "/api/products/" + this.data.id).should((response) => {
          expect(response.status).to.eq(200);
        });
      });
  });
});
