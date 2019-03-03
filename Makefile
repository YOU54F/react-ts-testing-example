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
	node scripts/generate-reports.js

slack-alert:
	node scripts/slack/slack-alert.js