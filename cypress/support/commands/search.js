Cypress.Commands.add('searchAProduct', (product) => {
    cy.get('#search').type(`${product}{enter}`)
    cy.get("div[class='search results']")
      .should('be.visible')
      .within( () => { 
        cy.get("span[class='product-image-wrapper']:first")
          .click()
      })
})