context('Network Request', function() {
  beforeEach(() => {
    cy.visit('/34');
  });

  it('cy.server() - control behavior of network requests and responses', () => {
    cy.server().should((server) => {
      expect(server.delay).to.eq(0);
      expect(server.method).to.eq('GET');
      expect(server.status).to.eq(200);
      expect(server.headers).to.be.null;
      expect(server.response).to.be.null;
      expect(server.onRequest).to.be.undefined;
      expect(server.onResponse).to.be.undefined;
      expect(server.onAbort).to.be.undefined;
    });

    cy.server({
      method: 'GET',
      delay: 3000
    });
  });

  it('cy.request() - make an XHR request', () => {
    cy.request('http://localhost:3014/34').should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
      expect(response).to.have.property('duration');
    });
  });
});
