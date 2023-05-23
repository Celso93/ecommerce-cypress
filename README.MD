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
npm run test
```

Or, you can open the UI with this command:
```bash
npm run UI
```

If you don't want to install locally you can use this Dockerfile to build a container to check this test:
Build an image
```bash
docker build -t example1 .
```

Run this image
```bash
docker run -it example1
```

Delete this image after running test:
```bash
docker rmi teste1
```

You can extract the report using this command:
```bash
docker run --rm -v /path/to/directory:/app/cypress/reports test1
```

This command will run in headless mode with chrome browser, and at the end, it will generate a report in the cypress/support directory.
Notes:
https://www.npmjs.com/package/@faker-js/faker