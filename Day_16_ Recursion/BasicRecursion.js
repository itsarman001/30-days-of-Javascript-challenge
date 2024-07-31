// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorialOf(n, total = 0) {
    if (n <= 0) return total;
    return factorialOf(n-1, total + n)
}

console.log(factorialOf(3))

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.