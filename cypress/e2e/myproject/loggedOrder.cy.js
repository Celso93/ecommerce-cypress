/// <reference types="cypress" />

describe('Logged User', () => {
  before(function () {
    cy.visit('/customer/account/')
    cy.fixture('users').then(function (user) { 
      this.user = user;
    })
    cy.login(this.user.email)
    cy.get("h1[class='page-title']")
      .contains('My Account', { matchCase: false }) 
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