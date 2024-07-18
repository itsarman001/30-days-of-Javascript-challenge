// Task 1
// Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
function oddEven(n) {
  let res = n % 2 ? "even" : "odd";
  return (reslut = `${n} is a ${res} number`);
}
oddEven(5);

// Task 2
// Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
function squreOf(n) {
  let x = n;
  x *= x;
  return (reslut = `Square of ${n} would be ${x}`);
}
squreOf(5);

// Task 3
function maximumOf(a, b) {
  let res = a >= b ? a : b;
  return (result = `Maximum of both number is ${res}`);
}
maximumOf(20, 25);

// Task 4
// Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
function concatStr(a, b) {
  return (res = a.concat(b));
}
console.log("New String is " + concatStr("Hello ", "World"));

// Task 5
// Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
const sumOf = (a, b = 20) => a + b;
console.log("Sum of Both Number are " + sumOf(5, 5));

// Task 6
const checkChar = (string, char) => (string.includes(char) ? true : false);
console.log(checkChar("Hello World", "a"));

// Task 7
const porductOf = (a, b = 5) => {
  return a * b;
};
console.log("Product of Both Number is " + porductOf(5, 10));

// Task 8
const printName = (fullName, age = "20") =>
  `Your name is ${fullName} & your age is ${age}.`;
console.log(printName("Budha Mar gaya", 56));

// Task 9
// Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
const helpFunc = (step) => console.log(`Function Called ${step}`);
const callFun = (calback, repeat) => {
  let i = 1;
  while (i <= repeat) {
    calback(i);
    i++;
  }
};
callFun(helpFunc, 5);

// Task 10
const hof = (funcA, funcB, value) => {
  const interResult = funcA(value);
  return (finalRsult = funcB(interResult));
};

console.log(hof(sumOf, porductOf, 20));
