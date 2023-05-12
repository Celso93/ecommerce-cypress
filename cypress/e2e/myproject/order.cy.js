/// <reference types="cypress" />

describe('Placer Order', () => {
    before(() => {
      cy.visit('/')
    })

    it('Guest User', function () {
      // Searching for a product
      cy.get('#search').type("Shirt{enter}")

      // Search Result - Clicking in the first product
      cy.get("div[class='search results']")
        .should('be.visible')
        .within( () => { 
          cy.get("span[class='product-image-wrapper']:first").click()
        })

      // On Product Page - Adding a product
      cy.get("div[class='product-add-form']").should('be.visible')

      // Swatch size
      cy.get("form .swatch-attribute-options.clearfix:first")
        .should('be.visible')  
        .children()
        .first()
        .click()

      // Swatch color
      cy.get("form .swatch-attribute-options.clearfix:last")
        .should('be.visible')
        .children()
        .first()
        .click()

      // Adding product
      cy.get("#product-addtocart-button")
        .should('be.visible')
        .contains('Add to Cart')
        .click();

      // Message with success 
      cy.get("div[class='page messages']")
        .should('be.visible')
        .contains('You added')

      cy.get("div[data-block='minicart']").should('be.visible')
    })
})