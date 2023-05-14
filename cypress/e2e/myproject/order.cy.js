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

      // Opening the minicart
      cy.get("div[data-block=minicart]")
        .should('be.visible')
        .click();

      // Minicart interaction
      cy.get("#minicart-content-wrapper").within(() => {
        cy.get("a[href$='/checkout/cart/']").click()
      })

      // Cart page
      cy.get("h1").contains('Shopping Cart')
      cy.get('#shopping-cart-table').should('be.visible')
      cy.get('div[class=cart-summary]').should('be.visible')

      // Checkout page
      cy.get(".cart-summary")
        .wait(8000)
        .should('be.visible')
        .within(() => {
          cy.get("button")
            .contains('Proceed to Checkout')
            .click();
        })

      // Shipping
      let randomEmail = `teste+${Math.floor(Math.random() * 1000)}@mailinator.com`
      cy.wait(5000)
      cy.contains('Shipping Address')
      cy.get("#checkout-step-shipping").should('be.visible')

      cy.get('#customer-email').type(randomEmail)
      cy.get("div[name='shippingAddress.firstname']").type(randomEmail)
      cy.get("input[name='lastname']").type('Automation Testing')
      cy.get("input[name='city']").type('Miami')
      cy.get("input[name='street[0]']").type('Miami')
      cy.get("input[name='street[1]']").type('Miami')
      cy.get("input[name='street[2]']").type('Miami')
      cy.get("select[name='region_id']").select('1')
      cy.get("input[name='postcode']").type('7862748247')
      cy.get("input[name='telephone']").type('1231231234')
      cy.get("input[value='tablerate_bestway']").check();
      cy.get("#shipping-method-buttons-container button").click();

      // Payment
      cy.contains('Shipping Address')
      cy.get("div[class='payment-method _active']").should('be.visible');
      cy.get("div[class='payment-method _active'] button[type='submit']").click();

      // Success page
      cy.get("h1").contains('Thank you for your purchase!')
      cy.get("div[class='checkout-success']").contains("We'll email you an order confirmation with details and tracking info")
      // cy.get("div[class='checkout-success']").invoke('text').as('orderSuccess')
      cy.get("div[class='checkout-success']").invoke('text').as('orderSuccess').then( (text) => {
        return order = text
      })
      let order = this.orderSuccess

      cy.log("Primeiro: ", this.orderSuccess)
      cy.log("Segundo: ", order)
      cy.writeFile('cypress/fixtures/order.txt', `${order}`)
    })
})