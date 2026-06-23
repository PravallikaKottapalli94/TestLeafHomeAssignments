// Interface
interface DatabaseConnection {
    connect(): void;
    disconnect(): void;
    executeUpdate(): void;
}

// Abstract Class
abstract class MySqlConnection implements DatabaseConnection {

    // Abstract methods inherited from interface
    abstract connect(): void;
    abstract disconnect(): void;
    abstract executeUpdate(): void;

    // Concrete method
    executeQuery(): void {
        console.log("Query is executed");
    }
}

//Concrete Class
class Playwrightconnection extends MySqlConnection{
    connect(): void {
        console.log("Playwright is connected");
    }
    disconnect(): void {
        console.log("Playwright is Disconnected");
    }
    executeUpdate(): void {
        console.log("Playwright is executing Update");
    }
}

// Main Program 
const connection_1 = new Playwrightconnection()
connection_1.connect()
connection_1.disconnect()
connection_1.executeUpdate()
connection_1.executeQuery()