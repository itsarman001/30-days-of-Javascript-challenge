/* Number Printing Script:
Write a script that prints numbers from 1 to 10 using both a for loop and a while loop. */
function loop10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  return;
}
// loop10()

function countWhile() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
// countWhile()

/* Multiplication Table Script:
Create a script that prints the multiplication table of 5 using a for loop. */
function tableOf(n) {
  console.log(`Table of ${n}`);
  let x = n;
  console.log(x);
  for (let i = 0; i < 9; i++) {
    x += n;
    console.log(x);
  }
}
// tableOf(20)

/* Pattern Printing Script:
Write a script that prints a pattern of stars using nested loops. */
function printStarPattern(rows) {
  for (let i = 1; i < rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
// printStarPattern(5);

/* Sum Calculation Script:
Write a script that calculates the sum of numbers from 1 to 10 using a while loop. */
function sumToN(n) {
  let i = 1;
  let j = 0;
  while (i <= n) {
    j += i;
    i++;
  }
  return j;
}
// console.log(sumToN(5));

/* Factorial Calculation Script:
Create a script that calculates the factorial of a number using a do...while loop. */
function factorial(n) {
  let i = 1;
  let j = 1;
  while (i <= n) {
    j *= i;
    i++;
  }
  return `Factorial of ${n} is ${j}`;
}
console.log(factorial(5));
