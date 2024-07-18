/*
1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
*/

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero!";
  }
  return a / b;
}

// Function to remainder two numbers
function remainder(a, b) {
  return a % b;
}

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);
console.log(`Remainder: ${remainder(num1, num2)}`);

/*
2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
*/
function sittingAllocation(rollNo) {
  if (rollNo >= 1 || rollNo <= 35) {
    console.log("Please head to room no 13");
  } else if (rollNo >= 36 || rollNo <= 70) {
    console.log("Please head to room no 14");
  } else if (rollNo >= 71 || rollNo <= 100) {
    console.log("Please head to room no 15");
  }
}
sittingAllocation(25);

/*
3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
*/
function ternaryOperator(elem) {
  const result = elem > 0 ? "Positive Number" : "Negative Number";
  console.log(`${elem} is a ${result}`);
}
ternaryOperator(20);
