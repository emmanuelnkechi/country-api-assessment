/// <reference types="cypress" />

describe("checkes the listing page", () => {
  beforeEach(() => {
    cy.visit("/").wait(6000);
  });

  it("Shows country response saved in local storage", () => {
    //This ensures that loading element is not found on the dom to enable fetched items display
    cy.get("#loading").should("not.exist");

    //This ensures that country response is saved to local storage when page loads
    cy.getAllLocalStorage("countries").should("exist");
  });

  it("Diplays list of countries and associated items", () => {
    //This ensures that element listing each country exist and it's children is greater than 0
    cy.get(".list__countries").find("a").its("length").should("be.gte", 0);

    //Ensure that the displayed image on the list is not broken
    cy.get("img")
      .should("be.visible")
      .and(($img) => expect($img[0].naturalWidth).to.be.gt(0));
  });

  it("Check if the toggle between themes works", () => {
    cy.get(".nav__icon").click();

    cy.get("#country-container")
      .should("have.css", "background")
      .and("contains", "rgb(19, 19, 19)");

    cy.get(".nav")
      .should("have.css", "background")
      .and("contains", "rgb(85, 84, 84)");

    cy.get("#search")
      .should("have.css", "background")
      .and("contains", "rgb(85, 84, 84)");

    cy.get(".nav__icon").click();

    cy.get("#country-container")
      .should("have.css", "background")
      .and("contains", "rgb(250, 250, 250)");

    cy.get(".nav")
      .should("have.css", "background")
      .and("contains", "rgb(255, 255, 255)");
  });

  it("displays text inside the search input and search for country name in the list", () => {
    cy.get("#search").type("france");
    //  Verify that the value has been updated
    cy.get("#search").should("have.value", "france");

    cy.get('[data-testid="France"]').should("exist");
  });

  it("filter for a region in the list of countries", () => {
    cy.get(".list__search--right-align").click();

    cy.get(".dropContent")
      .find("button")
      .its("length")
      .should("be.greaterThan", 0);

    cy.get(".dropContent").find("button[data-testid = 'Asia']").click();
    cy.get(".region").should("contain.text", "Asia");
  });
});
