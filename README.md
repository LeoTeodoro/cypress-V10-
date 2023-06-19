# cypress-V10+

learning cypress V10+

Comands:
STEP 0: npm init (optional)
provide package details

STEP 1: npm install

STEP 2: npm install cypress --save-dev

STEP 3: npm install --save-dev cypress-cucumber-preprocessor

STEP 4: npx cypress open

STEP 5: add comands in cypress.config.js

const cucumber = require('cypress-cucumber-preprocessor').default

STEP 5.1: add in e2e

setupNodeEvents(on, config) {
on('file:preprocessor', cucumber())
},

<!-- prettier-ignore -->
specPattern: "cypress/e2e/*.feature"

STEP 6: add in package.json
"cypress-cucumber-preprocessor": {
"nonGlobalStepDefinitions": true,
"step_definitions": "cypress/e2e"
}

<!-- api tests -->

STEP 1: Install this package:
npm i cypress-plugin-api
or
yarn add cypress-plugin-api

STEP 2: Add this line to your cypress/support/index.js file:
import 'cypress-plugin-api'

<!-- end api test -->

STEP 7: create folder in e2e and the files .feature with the same name, for the step definitions and gherkin comands

STEP 8: create folder in support and the files .js for the cy comands
