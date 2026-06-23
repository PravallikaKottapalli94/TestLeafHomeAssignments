// Interface
interface DatabaseConnection {
    connect(): void;
    disconnect(): void;
    executeUpdate(): void;
}
//Concrete Class
class PlaywrightConnection implements DatabaseConnection{
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
const connection = new PlaywrightConnection()
connection.connect()
connection.disconnect()
connection.executeUpdate()