"use strict";
// Abstract Class
class CanaraBank {
    // Concrete method
    recordPaymentDetails() {
        console.log("Payment details recorded successfully.");
    }
}
//Concrete Class
class Amazon extends CanaraBank {
    cashOnDelivery() {
        console.log("Cash on Delivery payment selected.");
    }
    upiPayments() {
        console.log("UPI Payment completed through Amazon.");
    }
    cardPayments() {
        console.log("Card Payment completed through Amazon.");
    }
    internetBanking() {
        console.log("Internet Banking payment completed through Amazon.");
    }
}
//Main Program
const order = new Amazon();
order.cashOnDelivery();
order.upiPayments();
order.cardPayments();
order.internetBanking();
order.recordPaymentDetails();
