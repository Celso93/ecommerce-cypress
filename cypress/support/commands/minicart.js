Cypress.Commands.add('accessingCartPage', () => {
  cy.get("div[data-block=minicart]")
    .should('be.visible')
    .click();

  cy.get("#minicart-content-wrapper").within(() => {
    cy.get("a[href$='/checkout/cart/']").click()
  })
})