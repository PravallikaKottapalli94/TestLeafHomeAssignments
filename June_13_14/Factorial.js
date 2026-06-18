"use strict";
// This is a simple factorial function in TypeScript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// Example usage
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);
