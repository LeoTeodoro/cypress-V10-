# cypress-V10-

learning cypress V10+

Comands:
STEP 1: npm init
provide package details

STEP 2: npm install cypress --save-dev

STEP 3: npm install --save-dev cypress-cucumber-preprocessor

STEP 4: npx cypress open

STEP 5: add comands in cypress.congig.js

const cucumber =
require('cypress-cucumber-preprocessor').default

setupNodeEvents(on, config) {
on('file:preprocessor', cucumber())
},

<!-- prettier-ignore -->
specPattern: "cypress/e2e/*.feature"

STEP 6: add in package.js
"cypress-cucumber-preprocessor": {
"nonGlobalStepDefinitions": true,
"step_definitions": "cypress/e2e"
}

STEP 7: create folder in e2e and the files .feature with the same name, for the step definitions and gherkin comands

STEP 8: create folder in support and the files .js for the cy comands
