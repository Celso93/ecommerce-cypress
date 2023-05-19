Cypress.Commands.add('fillingShippingAddress', () => {  
  cy.wait(5000)

  cy.contains('Shipping Address')
  cy.get("#checkout-step-shipping")
    .should('be.visible')

  cy.get('#checkout-step-shipping')
    .then( ($form) => {
      if ($form.is(':visible')) {
        cy.fillForm()
      }
    })

  cy.get("input[value='tablerate_bestway']").check();
})

Cypress.Commands.add('fillForm', () =>{
  let randomEmail = `teste+${Math.floor(Math.random() * 1000)}@mailinator.com`

  cy.get('#customer-email').then(($el) => {
    if ($el.is(':visible')) {
      cy.get('#customer-email')
        .type(randomEmail)
    }
  })
  
  cy.get("div[name='shippingAddress.firstname']").type(randomEmail)
  cy.get("input[name='lastname']").type('Automation Testing')
  cy.get("input[name='city']").type('Miami')
  cy.get("input[name='street[0]']").type('Miami')
  cy.get("input[name='street[1]']").type('Miami')
  cy.get("input[name='street[2]']").type('Miami')
  cy.get("select[name='region_id']").select('1')
  cy.get("input[name='postcode']").type('7862748247')
  cy.get("input[name='telephone']").type('1231231234')
})