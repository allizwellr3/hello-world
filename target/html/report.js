$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "just test",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "test execute",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "passes",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.just_test()"
});
formatter.result({
  "duration": 177658731,
  "status": "passed"
});
formatter.match({
  "location": "steps.test_execute()"
});
formatter.result({
  "duration": 2362513,
  "status": "passed"
});
formatter.match({
  "location": "steps.passes()"
});
formatter.result({
  "duration": 40084,
  "status": "passed"
});
});