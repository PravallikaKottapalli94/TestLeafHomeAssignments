// This is a function to calculate the nth Fibonacci number
function fibonacci(n: number): number {
    if (n <= 0) {
        throw new Error("Enter a positive integer greater than 0");
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// This is a function to print the Fibonacci series up to n terms
function printFibonacciSeries(n: number): void {
    if (n <= 0) {
        throw new Error("Enter a positive integer");
    }
    if (n === 1) {
        console.log("0");
        return;
    }
    if (n === 2) {
        console.log("0,1");
        return;
    }
    else {
        let fibSeries: number[] = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
        }
        console.log(`Fibonacci series up to ${n} terms: ${fibSeries.join(",")}`);
    }

}
//example usage
const num = 0;
printFibonacciSeries(num);
console.log(`Fibonacci of ${num} is ${fibonacci(num)}`);
