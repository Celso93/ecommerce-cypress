/// <reference types="cypress" />

describe('Logged User', () => {
  beforeEach(() => {
    cy.visit('/customer/account/')
    cy.fixture('users').then(function (user) { 
      this.user = user;
    })
  })

  it('Place Order', function () {
    cy.login(this.user.email)
    cy.get("h1[class='page-title']").contains('My Account', { matchCase: false }) 
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