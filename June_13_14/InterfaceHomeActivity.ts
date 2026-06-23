// Interface
interface Payments {
    cashOnDelivery(): void;
    upiPayments(): void;
    cardPayments(): void;
    internetBanking(): void;
}

// Abstract Class
abstract class CanaraBank implements Payments {

    // Abstract methods inherited from interface
    abstract cashOnDelivery(): void;
    abstract upiPayments(): void;
    abstract cardPayments(): void;
    abstract internetBanking(): void;

    // Concrete method
    recordPaymentDetails(): void {
        console.log("Payment details recorded successfully.");
    }
}

//Concrete Class
class Amazon extends CanaraBank{
    cashOnDelivery(): void {
        console.log("Cash on Delivery payment selected.");
    }

    upiPayments(): void {
        console.log("UPI Payment completed through Amazon.");
    }

    cardPayments(): void {
        console.log("Card Payment completed through Amazon.");
    }

    internetBanking(): void {
        console.log("Internet Banking payment completed through Amazon.");
    }
}

//Main Program
const  order = new Amazon()
order.cashOnDelivery();
order.upiPayments();
order.cardPayments();
order.internetBanking();
order.recordPaymentDetails();