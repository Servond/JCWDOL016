import Home from "./page";

describe("Home Page", () => {
  it("Will render page", () => {
    cy.mount(<Home />);
  });
  it("Title will show Home Page", () => {
    cy.mount(<Home />);

    cy.get("h1").should("have.text", "Home Page");
    // cy.get("h1").contains("Home Page");
  });
  it("Will increase count when increment button is click", () => {
    cy.mount(<Home />);

    cy.get("[id-cy=increment]").click();
    cy.get("[id-cy=counter]").should("have.text", 1);
  });
  it("Will decrease count when decrement button is click", () => {
    cy.mount(<Home />);

    cy.get("[id-cy=decrement]").click();
    cy.get("[id-cy=counter]").should("have.text", -1);
  });
});
