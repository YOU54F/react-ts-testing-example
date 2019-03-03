# A Typescript/React Website to demonstrate testing techniques

[![CircleCI](https://circleci.com/gh/YOU54F/react-test-testing-example.svg?style=svg)](https://circleci.com/gh/YOU54F/react-test-testing-example)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=YOU54F_react-test-testing-example&metric=alert_status)](https://sonarcloud.io/dashboard?id=react-test-testing-example)

A website built with React and Typesecript, using a CSS grid layout, to demonstrate various testing techniques.

It showcases the use of:-

- Unit-testing React Components with Jest & Enzyme
- Code-coverage with Istanbul
- Unit test reporting with Jest-Junit & Jest-Stare
- Automated Cross-browser CSS & JavaScript compatability checks via Static Analysis
- UI testing with Cypress.io in TypeScript
- The Cypress GUI tool
- The Cypress command line tool
- Cypress custom commands `cy.foo()`
- CircleCI integration
- Slack reporting
- Mochawesome for fancy HTML reporting
- DevTools console log output on test fail
- Integration with Cypress' Dashboard Service for project recording

## Installation

- Clone the project

### Local Installation

- Run `yarn install` to install the project dependencies
- Run `yarn build` to build the project
- Run `yarn test` to test the project with Jest/Enzyme
- Run `yarn lint` to lint the project
- Run `yarn lint-ts` to run the TypeScript Linter
- Run `yarn lint-css` to run the CSS linter and detect cross-browser issues
- Run `yarn lint-caniuse` to run the Can I Use JS compatability checker and detect cross-browser issues
- Run `yarn lint-compat` to run the JS ES5/6/7 Compatibility checker and detect cross-browser issues
- Run `yarn start` to run the project

## React Unit Testing with Jest & Enzyme

``` To run
yarn test
```

``` To run with coverage
yarn test:coverage
```

## CSS Checking with StyleLint

Compat.js - Static analysis tool for detecting browser compatibility issues in JavaScript and HTML.

```.stylelintrc
{
   "extends": "stylelint-config-standard",
   "plugins": [
     "stylelint-no-unsupported-browser-features"
   ],
   "rules": {
     "plugin/no-unsupported-browser-features": [true, {
       "severity": "warning"
     }]
   }
 }
```

``` To run
stylelint <path/to/css>
```

## JavaScript Checking with esLint against caniuse db

https://github.com/amilajack/eslint-plugin-compat

``` eslint section from package.json
 "eslintConfig": {
    "plugins": [
      "compat"
    ],
    "rules": {
      "compat/compat": "warn"
    },
    }
  }
```

``` To run
eslint <path/to/js>
```

## Javascript Checking against ECMAScript 5/6/7 compatibility tables

Compat.js - Static analysis tool for detecting browser compatibility issues in JavaScript and HTML.

https://github.com/jgardella/compat

``` .compatrc.json - note this tool does not use the browserslist configuration, hence listed versions
{
  "target": "path/to/js",
  "jsEnvs": ["ie11","chrome74",
    "edge16","firefox67","safari12_1",
    "ios12","samsung8_2","android4_4_3"]
}
```

``` To run
npx compat
```

``` Passing the supportedEnvs flag will show available browsers
npx compat --supportedEnvs
```

## UI testing with Cypress.io in TypeScript

We can use `cypress` along with `start-server-and-test` to start our app, run our tests and shutdown our app.

``` To run in commannd line
yarn run test:ci
```

``` To run cypress in GUI mode with the app running in the background
yarn run test:dev
```

## Typescript with Cypress

- Spec (test) files are written as `example.spec.ts` and contained in `cypress/integration`
- There is a `tsconfig.json` file in the `cypress` folder
  - It includes the paths for the `.ts` files. If you add other paths for yours, include them here.
  - It contains the typescript options and includes the Cypress typings for code completion.
  - use visual studio code (if you aren't already) - it's free and comes feature packed.
- There is a `tslint.json` file in the `e2e` folder
  - Contains some rules for code linting
- Tests are compiled with webpack typescript pre-processor.
  - The config file is in `webpack.config.js`
  - It is loaded in `cypress/plugins/index.js`, hooking into cypress's `on` event.

## Additional Cypress Configuration

The main cypress configuration file

- `cypress.json`

It can contain configuration options applicable to all environments

Environment specific config files are stored in `config/<environment.json>`

These will override any configurations specific environment vars set in `cypress.json`

these can be set on the command line by

- `--env configFile=<environment.json>`

Currently supported environments are

- development
- production
- staging
- qa

If no option is provided is will default to the baseUrl defined in `config.json`

In order to setup development, you will need a website locally running and your URI_ROOT should be set.

`export URI_ROOT=<your_root_url>`

If it's URI_ROOT is not, and you select `--env configFile=development` the application will error, and ask you to set it.

## Running tests locally via Make

- `make test-local` - depends on web app running locally
- `make test-qa`
- `make test-staging`
- `make test-production`
- `make test-ci` - will start and stop web app for you
- `make test-dev` - will start and stop web app for you

## Direct from the command line

- `npx cypress open` - runs test via gui
- `npx cypress run`  - run tests via command line
- `--env configFile=<env>` - select an environment specific config
- `-s '<pathToFile>'` path for the spec files you wish to run
  - `-s 'cypress/integration/commands.spec.js'` example

### GUI - Any changes made to test files are automatically picked up by the GUI and executed, post file save

- `make test-local-gui` Opens the GUI with the development configuration selection
- `make test-qa-gui`    Opens the GUI with the qa configuration selection

The GUI can be opened by `npx cypress open` but requires a `--env configFile=<env>` option in order to set the correct BaseURL

### Reporting

- Videos of each run are stored in `cypress/videos`
- Screenshots of failing tests are stored in `cypress/screenshots`
- HTML Reports of test runs are generated with MochaAwesome are stored in `cypress/reports`
- One report is generated per spec file
- A report bundler is provided which will process each report in `cypress/reports` and combine them into a single HTML document with a random uuid title in `mochareports`
- The report bundler can be run with `make combine-reports`
- It can be published to an AWS S3 bucket with `make publish-reports-s3`
- To publish to a bucket, set the following env vars

```sh
 export BUCKET_NAME=<YOUR_BUCKET_NAME>
 export AWS_ACCESS_ID=<YOUR_AWS_ACCESS_ID>
 export AWS_SECRET_KEY=<YOUR_AWS_SECRET_KEY>
```

## CircleCI

This project is building in CircleCI and can be viewed at the following link

https://circleci.com/gh/YOU54F/react-ts-testing-example

See the `.circleci` folder

- `config.yml` - Contains the CircleCI build configuration

### Slack Reporting

A JS file has been written in order to publish results

- `scripts/slack/slack-alert.js`

It provides the following distinct message types

- Build Failure / Cypress error
- Test Failure
- Test Success

It provides the following information

- CircleCI Build Status
- Test Stats (Total Tests / Passes / Failures)
- Author with link to Github commit
- Branch name
- Pull Request number and link to PR (only if PR)

And the following build/test artefacts

- CircleCI Build Log button
- HTML Test report button (only on build success)
- Videos of test runs (one link per test)
- Screenshots of failed tests (one link per failing test)

You will need to set up a couple of things in order to use this.

First build a Slack app & create an incoming webhook

- https://api.slack.com/slack-apps

Set the following environment variables in your localhost or CI configuration

- `$SLACK_WEBHOOK_URL` - The full URL you created in the last step
- `$SLACK_API_CHANNEL` - The channel ref you wish to publish to (right-click on your channel and click copy link, check the link, its the digits after the last / )

### Cypress Dashboard Recording

CircleCI builds pass in a `CYPRESS_RECORD_KEY` in order to publish the results to the Cypress Dashboard.

We run `make test-record` to set the `--record` flag and publish the results to the dashboard.

## TODO

- Write up on Jest unit tests with snapshots and enzyme
- Cypress scripts for reporting need unit tests
- publish to s3 bucket needs error handling, should exit each function gracefully if the directories are empty
