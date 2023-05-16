Cypress.Commands.add('checkingCartAndCheckout', () => {
  cy.get("h1").contains('Shopping Cart')
  cy.get('#shopping-cart-table').should('be.visible')
  cy.get('div[class=cart-summary]').should('be.visible')

  cy.get(".cart-summary")
    .wait(8000)
    .should('be.visible')
    .within(() => {
      cy.get("button")
        .contains('Proceed to Checkout')
        .click();
     })
})