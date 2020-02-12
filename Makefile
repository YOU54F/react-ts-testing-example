CYPRESSRUNCMD=npx cypress run
CYPRESSGUICMD=npx cypress open
YARNRUN=yarn run

test:
	$(CYPRESSRUNCMD)
	
test-ci:
	$(YARNRUN) test:ci
	
test-dev:
	$(YARNRUN) test:dev
	
test-gui:
	$(CYPRESSGUICMD)

test-local:
	$(CYPRESSRUNCMD) --env configFile=development

test-qa:
	$(CYPRESSRUNCMD) --env configFile=qa

test-staging:
	$(CYPRESSRUNCMD) --env configFile=staging

test-production:
	$(CYPRESSRUNCMD) --env configFile=production

test-local-gui:
	$(CYPRESSGUICMD) --env configFile=development

test-qa-gui:
	$(CYPRESSGUICMD) --env configFile=qa

test-record:
	$(CYPRESSRUNCMD) --record

combine-reports:
	npx mochawesome-merge cypress/reports/mocha/*.json > mochareports/report-$$(date +'%Y%m%d-%H%M%S').json

generate-report:
	npx marge mochareports/*.json -f report-$$(date +'%Y%m%d-%H%M%S') -o mochareports

slack-alert:
	npx cypress-slack-reporter --logger
