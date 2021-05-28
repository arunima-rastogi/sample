$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Web Shop",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "e.srastogi@gmail.com",
        "$Testing1$"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefnition.user_already_on_login_page()"
});
formatter.result({
  "duration": 30618368400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 12929200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 5332984100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2937405500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 17726400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefnition.close_the_browser()"
});
formatter.result({
  "duration": 1219701100,
  "status": "passed"
});
});