import NavBarItem from "./NavBarItem";

describe("show render", () => {
  it("show mount", () => {
    cy.viewport(1900, 950);

    cy.mount(<NavBarItem />);

    cy.root().trigger("mouseover");
    // cy.get('[data-hook="nav-bar"]');
  });
});
