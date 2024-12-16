# discount_eligibility_checker

This is a simple web application that checks if a user is eligible for a discount based on their age or purchase amount. The program demonstrates the use of:
- **OR (`||`) operators** in JavaScript
- **DOM manipulation** for interacting with user inputs
- Variables and datatypes in JavaScript.

## Features
- Accepts user input for age and purchase amount.
- Checks eligibility using the following conditions:
  - The user is either under 18 or over 60 years old.
  - OR the user's purchase amount is greater than 1,000 SEK.
- Displays the result dynamically using JavaScript.

## Technology Stack
- **HTML**: Structure of the web page.
- **CSS**: Styling for the web page.
- **JavaScript**: Logic for checking eligibility and updating the DOM.

## How to Run
1. Download or clone the repository.
2. Open the `index.html` file in any modern web browser.
3. Enter your age and purchase amount to check your discount eligibility.

## Example
| Age   | Purchase Amount | Eligible?   |
|-------|-----------------|-------------|
| 16    | 500 SEK         | Yes         |
| 30    | 1500 SEK        | Yes         |
| 45    | 800 SEK         | No          |
| 70    | 900 SEK         | Yes         |

## Learning Outcomes
This program helps you learn:
- How to use **OR (`||`) operators** in conditional logic.
- Basics of **DOM manipulation** in JavaScript.
- Using **variables** and working with **datatypes** like `number`.