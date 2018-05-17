describe("Home page", function () {
  it(".should() - assert that <title> is correct", function () {
    cy.visit("https://glacial-mountain-71826.herokuapp.com/");

    cy.title().should("include", "Quality Donations Here");
  });

});
