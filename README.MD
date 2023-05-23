# Cypress Project
This repository contains automated tests written using Cypress. It include just an end-to-end tests to ensure the functionality and stability of the application.

## Prerequisites
* NodeJS v18.8.0
* Npm    9.6.6

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies:
```bash
npm install --save-dev
```

## Running Tests
To run the tests in chrome headless, use the following command:
```bash
npm run chrome:headless
```

Or, you can open the UI with this command:
```bash
npm run UI
```

This command will run in headless mode with chrome browser, and at the end, it will generate a report in the cypress/support directory.
Notes:
https://www.npmjs.com/package/@faker-js/faker