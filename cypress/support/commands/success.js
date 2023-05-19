Cypress.Commands.add('checkingOrder', () => {
  cy.get("h1").contains('Thank you for your purchase!')
  cy.get("div[class='checkout-success']").contains("We'll email you an order confirmation with details and tracking info")
  // cy.get("div[class='checkout-success']").invoke('text').as('orderSuccess')
  // cy.get("div[class='checkout-success']").invoke('text').as('orderSuccess').then( (text) => {
  //   return order = text
  // })
  // let order = this.orderSuccess

  // cy.log("Primeiro: ", this.orderSuccess)
  // cy.log("Segundo: ", order)
  // cy.writeFile('cypress/fixtures/order.txt', `${order}`)
})