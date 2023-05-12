/// <reference types="cypress" />

describe('Login', () => {
    before(() => {
      cy.visit('/customer/account/')
      cy.fixture('users').then(function (testdata) { 
        this.testdata = testdata; 
        cy.log("Olha a sua variavel ai", testdata)
      })
    })

    it('Success', function () {
      cy.log("Olha a sua variavel dentro do cenario", this.testdata)
      cy.get('#email').type(this.testdata.email)
      cy.get('#pass').type('teste+1234')
      cy.get("button[id='send2']").click()
      cy.get("h1[class='page-title']").contains('My Account', { matchCase: false }) 
    })
})