// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands/cart'
import './commands/commands'
import './commands/createUser'
import './commands/login'
import './commands/minicart'
import './commands/search'
import './commands/shipping'
import './commands/payment'
import './commands/product'
import './commands/success'
import 'cypress-mochawesome-reporter/register'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})