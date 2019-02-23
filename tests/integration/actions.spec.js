context('Actions', () => {
  beforeEach(() => {
    cy.visit('/34');
  });

  it('cy.click() -> should show more than 3 lis', () => {
    cy.get('.more_1IJpM').click();
    cy.get('.subsection_336vd > ul > li').should(($lis) => {
      expect($lis).to.be.have.length.gte(4);
    });
  });
});
