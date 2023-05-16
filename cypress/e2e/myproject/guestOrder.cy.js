/// <reference types="cypress" />

describe('Guest User', () => {
  before(() => {
    cy.visit('/')
  })

  it('Place Order', function () {
    cy.searchAProduct('Shirt')
    cy.addConfigurableProductToCart()
    cy.accessingCartPage()
    cy.checkingCartAndCheckout()
    cy.fillingShippingAddress()
    cy.get("#shipping-method-buttons-container button").click();
    cy.choosePaymentMethods()
    cy.checkingOrder()
  })
})