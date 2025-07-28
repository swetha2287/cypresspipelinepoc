

describe('Footer',()=>
{
   beforeEach(() => {
    cy.visit('https://wknd.site/us/en.html');
    cy.fixture('footerLinks').as('links');
  });

 
it('Functional testcases of Footer',function()
{
     this.links.internalLinks.forEach((link) => {
      cy.get('footer').within(() => {
        cy.contains('a', link.label.toUpperCase())
          .should('be.visible');
      });
    })
      this.links.socialLinks.forEach((social) => {
    cy.get(`footer a[href="${social.url}"]`).should('be.visible');
  
cy.get('#image-377462e50f > .cmp-image__link > .cmp-image__image').should('be.visible');
cy.get('#image-377462e50f > .cmp-image__link > .cmp-image__image').should('be.clickable');
cy.get('#cmp-image__link').should('be.visible');
cy.get('#cmp-image__link').should('be.clickable')

      });
});
})