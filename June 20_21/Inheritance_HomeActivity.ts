// Step 1: Base Class
class WebComponent {
    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    click(): void {
        console.log(`Clicked on component with selector: ${this.selector}`);
    }

    focus(): void {
        console.log(`Focused on component with selector: ${this.selector}`);
    }
}

// Step 2: Derived Class - Button
class Button extends WebComponent {

    constructor(selector: string) {
        super(selector);
    }

    override click(): void {
        super.click(); // Call parent class method
        console.log("Button-specific action executed.");
    }
}

// Step 3: Derived Class - TextInput
class TextInput extends WebComponent {
    value: string = "";

    constructor(selector: string) {
        super(selector);
    }

    enterText(text: string): void {
        this.value = text;
        console.log(
            `Entered text "${this.value}" into input with selector: ${this.selector}`
        );
    }
}

// Step 4: Testing Function
function testComponents(): void {
    const loginButton = new Button("#loginBtn");
    const usernameInput = new TextInput("#username");

    loginButton.focus();
    loginButton.click();

    usernameInput.focus();
    usernameInput.enterText("Pravallika");
}

// Run the test
testComponents();