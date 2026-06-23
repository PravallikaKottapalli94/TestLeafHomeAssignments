"use strict";
// Abstract Class
class MySqlConnection {
    // Concrete method
    executeQuery() {
        console.log("Query is executed");
    }
}
//Concrete Class
class Playwrightconnection extends MySqlConnection {
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
const connection_1 = new Playwrightconnection();
connection_1.connect();
connection_1.disconnect();
connection_1.executeUpdate();
connection_1.executeQuery();
