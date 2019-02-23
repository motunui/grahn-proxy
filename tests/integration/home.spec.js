context('Window', function() {
  beforeEach(() => {
    cy.visit('/34');
  });

  it('Title - get the title', () => {
    cy.title().should('include', 'Trip Advisor');
  });

  it('Should Contain Highlights', () => {
    cy.get('.subsection_336vd > ul > li').should(($lis) => {
      expect($lis).to.be.have.length.gte(2);
    });
  });
});
