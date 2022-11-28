import StatusIcon from "./StatusIcon";

describe("show render", () => {
  // it("show mount", () => {
  //   cy.mount(
  //     <StatusIcon isHot={true} isNew={true} isSale={true} isvalue={true} />
  //   );
  //   cy.get('[data-hook="icon"]').first();
  // });

  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
  it("show icon", () => {
    cy.mount(
      <StatusIcon isHot={false} isNew={false} isSale={true} isvalue={false} />
    );
    // cy.get('[data-hook="icon"]').type("Sale");
    cy.get('[data-hook="icon"]', { timeout: 10000 })
      .should("not.have.text", "Hot")
      .should("be.visible")
      .and("contain", "Sale")
      .and("not.have.text", "New")
      .and("not.have.text", "15")
      .and("exist");
  });
});
