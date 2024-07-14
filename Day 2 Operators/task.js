/* Activity 1: Arithmetic Operations */

/*
Task 1: Write a program to add two numbers and log the result to the console.
*/
function sumOfTwoNumber(a, b) {
  return a + b;
}
console.log("sum of two number are " + sumOfTwoNumber(20, 15));

/*
Task 2: Write a program to subtract two numbers and log the result to the console.
*/
function subOfTwoNumber(a, b) {
  return a - b;
}
console.log("sub of two number are " + subOfTwoNumber(20, 15));

/*
Task 3: Write a program to multiply two numbers and log the result to the console.
*/
function multiplicationOfTwoNumber(a, b) {
  return a * b;
}
console.log(
  "multiplication of two number are " + multiplicationOfTwoNumber(20, 15)
);

/*
Task 4: Write a program to divide two numbers and log the result to the console.
*/
function divisionOfTwoNumber(a, b) {
  return a / b;
}
console.log(
  "multiplication of two number are " + divisionOfTwoNumber(200, 100)
);

/*
Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/

function remainderOfTwoNumber(a, b) {
  return a % b;
}
console.log("remainder of two number are " + remainderOfTwoNumber(230, 20));

/* Activity 2: Assignment Operators */

/*
Task 6: Use the += operator to add a number to a variable and log the result to the console.
*/
{
  let a = 5;
  a += 5;
  console.log("Result for += Assignment Operators is " + a);
}

/*
Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
*/
{
  let b = 10;
  b -= 5;
  console.log("Result for -= Assignment Operators is " + b);
}

/* Activity 3: Comparison Operators */

/*
Task 8: Write a program to compare two numbers using > and < and log the result to the console.
*/
(function greaterThan(a, b) {
  if (a > b) {
    console.log(a + " is greater than " + b);
  } else {
    console.log(a + " is less than " + b);
  }
})(5, 10);
/*
Task 9: Write a program to compare two numbers using >= and <= and log the result to the consol
*/
function greaterThanEqualsTo(a, b) {
  if (a === b) {
    console.log(a + " is equals to " + b);
  } else if (a >= b) {
    console.log(a + " is greater than " + b);
  } else if (a <= b) {
    console.log(a + " is less than " + b);
  }
}
greaterThanEqualsTo(20, 35);

/*
Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/
function ComparingVar(a, b) {
  const looseEquality = a == b ? true : false;
  const strictEquality = a === b ? true : false;
  console.log("Loose Equality a == b: " + looseEquality);
  console.log("Srtict Equality a === b: " + strictEquality);
}
ComparingVar(5, "5");

/* Activity 4: Logical Operators */

/*
Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
*/
function useOfAndOperator(a) {
  if (a > 5 && a < 10)
    return console.log(`your num ${a} is greater than 5 and less than 10`);
  return console.log("please enter a number between 5 and 10");
}
useOfAndOperator(6);
/*
Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
*/
function useOfOrOperator(a) {
  if (a > 5 || a < 10)
    return console.log(
      `your num ${a} is either greater than 5 or less than 10`
    );
  return console.log("please enter a number between 5 and 10");
}
useOfOrOperator(6);

/*
Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
*/
function useOfLogicalNot(a, b) {
  if (a !== b) return console.log(`${a} matches with ${b}`);
  return console.log(`${a} doesn't matches ${b}`);
}
useOfLogicalNot(6, "6");
/*
Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/
function ternaryOperator(elem) {
  const result = elem > 0 ? "Positive Number" : "Negative Number";
  console.log(`${elem} is a ${result}`);
}
ternaryOperator(20);
