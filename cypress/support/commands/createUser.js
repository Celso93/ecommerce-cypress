Cypress.Commands.add('createUser', () => {
    let randomNumber = Math.floor(Math.random() * 1000);

    cy.get("#firstname").type('Jose')
    cy.get("#lastname").type('Aldo')
    cy.get("#email_address").type(`teste+${randomNumber}@mailinator.com`)
    cy.get("#password").type('teste+1234')
    cy.get("#password-confirmation").type('teste+1234')
    cy.get("button[title='Create an Account']").click()
})