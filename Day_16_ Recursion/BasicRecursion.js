// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorialOf(n, total = 0) {
  if (n <= 0) return total;
  return factorialOf(n - 1, total + n);
}

console.log(factorialOf(3));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(1));
console.log("Fibonacci of 5:", fibonacci(5));
console.log("Fibonacci of 10:", fibonacci(10));
