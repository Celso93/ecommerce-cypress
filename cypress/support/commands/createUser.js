Cypress.Commands.add('createUser', () => {
    let randomEmail = `teste+${Math.floor(Math.random() * 1000)}@mailinator.com`

    cy.writeFile('cypress/fixtures/users.json', { "email": randomEmail})
    cy.get("#firstname").type('Jose')
    cy.get("#lastname").type('Aldo')
    cy.get("#email_address").type(randomEmail)
    cy.get("#password").type('teste+1234')
    cy.get("#password-confirmation").type('teste+1234')
    cy.get("button[title='Create an Account']").click()
})