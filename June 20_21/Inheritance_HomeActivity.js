"use strict";
// Step 1: Base Class
class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`Clicked on component with selector: ${this.selector}`);
    }
    focus() {
        console.log(`Focused on component with selector: ${this.selector}`);
    }
}
// Step 2: Derived Class - Button
class Button extends WebComponent {
    constructor(selector) {
        super(selector);
    }
    click() {
        super.click(); // Call parent class method
        console.log("Button-specific action executed.");
    }
}
// Step 3: Derived Class - TextInput
class TextInput extends WebComponent {
    value = "";
    constructor(selector) {
        super(selector);
    }
    enterText(text) {
        this.value = text;
        console.log(`Entered text "${this.value}" into input with selector: ${this.selector}`);
    }
}
// Step 4: Testing Function
function testComponents() {
    const loginButton = new Button("#loginBtn");
    const usernameInput = new TextInput("#username");
    loginButton.focus();
    loginButton.click();
    usernameInput.focus();
    usernameInput.enterText("Pravallika");
}
// Run the test
testComponents();
