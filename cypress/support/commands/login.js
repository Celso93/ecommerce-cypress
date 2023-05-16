Cypress.Commands.add('login', (user) => {
    cy.get('#email').type(user)
    cy.get('#pass').type('teste+1234')
    cy.get("button[id='send2']").click()
})