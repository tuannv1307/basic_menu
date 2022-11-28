import DetailsMenuItem from "./DetailsMenuItem";

describe("show render", () => {
  // it("show mount with name", () => {
  //   cy.mount(<DetailsMenuItem name="abc" />);
  //   cy.root();

  //   cy.get('[data-hook="nav-item"]').should("be.visible");
  // });

  it("show mount with category ", () => {
    cy.mount(
      <DetailsMenuItem
        name="abcadaw"
        category={[
          {
            name: "Magezon Page Builder",
            value: {
              isHot: false,
              isSale: true,
              isNew: false,
            },
          },
        ]}
      />
    );
    // cy.root();
    cy.get('[data-hook="nav-item-category"]').should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );
  });
});
