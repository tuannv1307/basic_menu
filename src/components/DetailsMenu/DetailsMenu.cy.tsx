import DetailsMenu from "./DetailsMenu";

describe("Should render", () => {
  it("should mount", () => {
    cy.mount(<DetailsMenu />);
    cy.get('[data-hook="detail-menu-wapper"]');
  });

  it("should show name contains", () => {
    cy.mount(<DetailsMenu name="Title 3" />);
    cy.get(
      '[data-hook="detail-menu-wapper"] [data-hook="name-menu-detail"]'
    ).contains("Title 3");
  });

  it("should show name should", () => {
    cy.mount(<DetailsMenu name="Title 3" />);

    cy.get(
      '[data-hook="detail-menu-wapper"] [data-hook="name-menu-detail"]'
    ).should("have.text", "Title 3");
  });

  it("should show name and", () => {
    cy.mount(<DetailsMenu name="Title 3" isShowToggle={false} />);

    cy.get("span").should("have.class", "abc").and("not.be.disabled");
  });

  it("should show toglle", () => {
    cy.mount(<DetailsMenu />);
    cy.get(
      '[data-hook="detail-menu-wapper"] [data-hook="name-menu-detail"]'
    ).should("have.text", "Title 3");
  });

  it.only("should show hover", () => {
    cy.mount(<DetailsMenu name="Title 3" isShowToggle={true} />);
    cy.get('[data-hook="detail-menu-wapper"] ').trigger("mouseover");
  });

  it("should show text color", () => {
    cy.mount(<DetailsMenu name="Title 3" isShowToggle={true} />);
    cy.get('[data-hook="detail-menu-wapper"]')
      .trigger("mouseover")
      .should("have.css", "background-color", "rgb(0, 125, 189)");
  });
});
