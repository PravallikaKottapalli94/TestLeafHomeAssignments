"use strict";
class APIClient {
    // Method Implementation
    sendRequest(endpoint, requestBody, requestStatus) {
        console.log(`Endpoint: ${endpoint}`);
        if (requestBody !== undefined && requestStatus !== undefined) {
            console.log(`Request Body: ${requestBody}`);
            console.log(`Request Successful: ${requestStatus}`);
        }
        console.log("----------------------------");
    }
    // Demonstration Method
    demonstrateRequests() {
        // Calling first overloaded version
        this.sendRequest("/users");
        // Calling second overloaded version
        this.sendRequest("/users/create", '{"name":"John","email":"john@example.com"}', true);
    }
}
// Create Object
const apiClient = new APIClient();
// Call both overloaded methods
apiClient.demonstrateRequests();
