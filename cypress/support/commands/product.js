Cypress.Commands.add('addConfigurableProductToCart', () => {
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

      cy.get("#product-addtocart-button")
        .should('be.visible')
        .contains('Add to Cart')
        .click();

      cy.get("div[class='page messages']")
        .should('be.visible')
        .contains('You added')

})