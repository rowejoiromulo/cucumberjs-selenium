var reporter = require('cucumber-html-reporter');

const resultsDir = './results'
var options = {
        theme: 'bootstrap',
        jsonFile: `${resultsDir}/results.json`,
        output: `${resultsDir}/results.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
    };

module.exports = reporter.generate(options);