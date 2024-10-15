import About from "./page";

describe("About Page", () => {
  it("Will render page", () => {
    cy.mount(<About />);
  });
  it("Title will show About Page", () => {
    cy.mount(<About />);

    cy.get("h1").should("have.text", "About Page");
  });
});
