Cypress.Commands.add('choosePaymentMethods', () => {
  cy.contains('Shipping Address')
  cy.get("div[class='payment-method _active']").should('be.visible');
  cy.get("div[class='payment-method _active'] button[type='submit']").click();
})