class APIClient {

    // Overload Signatures
    sendRequest(endpoint: string): void;
    sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

    // Method Implementation
    sendRequest(
        endpoint: string,
        requestBody?: string,
        requestStatus?: boolean
    ): void {

        console.log(`Endpoint: ${endpoint}`);

        if (requestBody !== undefined && requestStatus !== undefined) {
            console.log(`Request Body: ${requestBody}`);
            console.log(`Request Successful: ${requestStatus}`);
        }

        console.log("----------------------------");
    }

    // Demonstration Method
    demonstrateRequests(): void {
        // Calling first overloaded version
        this.sendRequest("/users");

        // Calling second overloaded version
        this.sendRequest(
            "/users/create",
            '{"name":"John","email":"john@example.com"}',
            true
        );
    }
}

// Create Object
const apiClient = new APIClient();

// Call both overloaded methods
apiClient.demonstrateRequests();