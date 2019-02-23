describe('My First Test', function() {
  it('Makes an assertion', function() {
    // Arrange -setup initial app state
    // -- visit a web page
    cy.visit('https://example.cypress.io');
    // -- query for an element

    // Act - take an action
    // -- interact with that element
    // Assert = make an assertion
    // -- make an assertion about page content
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });

  it('Gets, types and asserts', function() {
    // Arrange -setup initial app state
    // -- visit a web page
    cy.visit('https://example.cypress.io');
    // -- query for an element

    // Act - take an action
    // -- interact with that element
    // Assert = make an assertion
    // -- make an assertion about page content
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
