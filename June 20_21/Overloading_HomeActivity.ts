class TestReporter {

    // Overload Signatures
    reportStep(msg: string, status: string): void;
    reportStep(msg: string, status: string, snap: boolean): void;

    // Implementation
    reportStep(msg: string, status: string, snap?: boolean): void {
        console.log(`Message: ${msg}`);
        console.log(`Status: ${status}`);

        if (snap !== undefined) {
            console.log(`Take Snapshot: ${snap}`);
        }

        console.log("-------------------------");
    }

    // Method to demonstrate overloading
    demonstrateOverloading(): void {
        // Calling first overloaded method
        this.reportStep("Login successful", "PASS");

        // Calling second overloaded method
        this.reportStep("User registration failed", "FAIL", true);
    }
}

// Create object and execute
const reporter = new TestReporter();
reporter.demonstrateOverloading();