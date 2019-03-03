describe('Example Cypress Test', () => {
  context('User can visit site and see content', () => {
    before(() => {
      cy.visit('/');
    });
    it('User can see header', () => {
      cy.get('#header').contains('An example website');
    });
    it('User can see navigation contents', () => {
      cy.get('#gallery-link').contains('Gallery');
      cy.get('#about-link').contains('About');
      cy.get('#contact-link').contains('Contact');
    });
    it('User can see footer contents', () => {
      cy.get('#email-footer').contains('Email');
      cy.get('#github-footer').contains('Github');
      cy.get('#twitter-footer').contains('Twitter');
    });

    it('User can see gallery images', () => {
      cy.get('gallery_grid').contains('grid-item');
    });

    it('User can see parallax effect', () => {
      cy.get('#parallax-text');
    });

    it('User can click on about page and it loads its content', () => {
      cy.get('#about-link').click();
      cy.get('#paragraphs').contains(
        'An example website written in TypeScript & React.'
      );
      cy.get('#paragraphs').contains('ui testing with cypress.');
    });
    it('User can click on contact page and it loads it content', () => {
      cy.get('#contact-link').click();
      cy.get('#Email').type('test@test.com');
      cy.get('#Name').type('Testy Tester');
      cy.get('#Message').type('Tested with cypress');
      cy.get('#Submit').click();
    });
  });
});
