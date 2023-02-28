/// <reference types="cypress" />

describe("checks the detail page", () => {
  beforeEach(() => {
    cy.visit("/").wait(6000);
  });

  it("displays detail page when a card is clicked", () => {
    cy.get("[data-testid='Afghanistan'").click();

    // we should be redirected to /details/
    cy.url().should("include", "/details/AFG");

    //Ensure that the displayed image on the list is not broken
    cy.get("img")
      .should("be.visible")
      .and(($img) => expect($img[0].naturalWidth).to.be.gt(0));

    cy.get("#back-link").should("contain", "Back");

    cy.get("#back-link").click();

    // we should be redirected to /
    cy.url().should("include", "/");
  });

  it("It can click through borders to see other countries", () => {
    cy.get("[data-testid='Afghanistan'").click();

    // we should be redirected to /details/
    cy.url().should("include", "/details/AFG");
    cy.get(".borders").find("[data-testid='IRN']").click();
    cy.url().should("include", "/details/IRN");
  });
});
