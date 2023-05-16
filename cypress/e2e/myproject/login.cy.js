/// <reference types="cypress" />

describe('Login', () => {
    before(() => {
      cy.visit('/customer/account/')
      cy.fixture('users').then(function (testdata) { 
        this.testdata = testdata; 
        // cy.log("Variable: ", testdata)
      })
    })

    it('Success', function () {
      cy.login(this.testdata.email)
      cy.get("h1[class='page-title']")
        .contains('My Account', { matchCase: false }) 
    })
})