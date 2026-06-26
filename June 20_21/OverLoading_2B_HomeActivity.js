"use strict";
// Superclass
class BasePage {
    findElement(locator) {
        console.log(`Finding element: ${locator}`);
    }
    clickElement(locator) {
        console.log(`Clicking element: ${locator}`);
    }
    enterText(locator, text) {
        console.log(`Entering "${text}" into ${locator}`);
    }
    performCommonTasks() {
        console.log("Performing common tasks from BasePage");
    }
}
// Subclass
class LoginPage extends BasePage {
    // Overriding the superclass method
    performCommonTasks() {
        console.log("Performing LoginPage specific tasks");
        console.log("Opening Login Page");
        console.log("Verifying Login Form");
    }
}
// Demonstration
// Object of BasePage
const basePage = new BasePage();
console.log("=== BasePage Methods ===");
basePage.findElement("searchBox");
basePage.clickElement("searchButton");
basePage.enterText("searchBox", "TypeScript");
basePage.performCommonTasks();
console.log("\n=== LoginPage Methods ===");
// Object of LoginPage
const loginPage = new LoginPage();
loginPage.findElement("usernameField");
loginPage.enterText("usernameField", "admin");
loginPage.enterText("passwordField", "password123");
loginPage.clickElement("loginButton");
// Calls overridden method
loginPage.performCommonTasks();
