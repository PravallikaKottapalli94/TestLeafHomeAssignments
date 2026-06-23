"use strict";
//Concrete Class
class PlaywrightConnection {
    connect() {
        console.log("Playwright is connected");
    }
    disconnect() {
        console.log("Playwright is Disconnected");
    }
    executeUpdate() {
        console.log("Playwright is executing Update");
    }
}
// Main Program 
const connection = new PlaywrightConnection();
connection.connect();
connection.disconnect();
connection.executeUpdate();
