
describe('teaser', () => {
  it('teaser UI test', () => {
    cy.visit('https://wknd.site/us/en.html')
    cy.get('#featured-teaser-home > .cmp-teaser__content > .cmp-teaser__title').contains("Camping in Western Australia")
    cy.get('#featured-teaser-home > .cmp-teaser__content > .cmp-teaser__description').should('be.visible')
    cy.get('#featured-teaser-home-image > .cmp-image__image').should('be.visible').and('have.prop', 'naturalWidth') 
    .should('be.greaterThan', 0);
    // cy.get('[data-cy="pdp-hero-image"]')
    // .should('be.visible') // Asserts that the element is not hidden by CSS
    // .and('have.prop', 'naturalWidth') // A natural way to check if the image has loaded
    // .should('be.greaterThan', 0);
     cy.get('#featured-teaser-home-image > .cmp-image__image')
    .should('have.attr', 'src')
    cy.get('#featured-teaser-home-image > .cmp-image__image')
    //.should('have.attr', 'alt', 'The Lennard River');
   
  })
})