Feature: Deal data creation

Scenario: Free CRM Create a new deal scenario

Given user is already on Login Page
When title of login page is Web Shop
Then user enters username and password
| e.srastogi@gmail.com | $Testing1$ |

Then user clicks on login button
Then user is on home page
Then Close the browser