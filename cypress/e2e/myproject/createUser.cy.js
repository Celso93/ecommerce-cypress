/// <reference types="cypress" />

describe('Creating a user', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    })

    it.only('Success', () => {
      cy.createUser()
      cy.get("div[class='page messages']").contains('Thank you for registering with Main Website Store.', { matchCase: false }) 
    })
})