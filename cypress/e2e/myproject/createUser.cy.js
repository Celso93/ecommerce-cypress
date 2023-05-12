/// <reference types="cypress" />

describe('Creating a user', () => {
    beforeEach(() => {
      cy.visit('/customer/account/create/')
    })

    it.only('Success', () => {
      cy.createUser()
      cy.get("div[class='page messages']").contains('Thank you for registering with Main Website Store.', { matchCase: false }) 
    })
})