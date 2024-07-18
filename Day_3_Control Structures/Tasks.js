/* Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. */
function positiveNum(a) {
  let result;
  if (a === 0) {
    result = `${a} is a neither positive nor negetive`;
  } else if (a > 0) {
    result = `${a} is a positive number`;
  } else {
    result = `${a} is a negetive number`;
  }
  console.log(result);
  return result;
}
positiveNum(0);

/* Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console. */
function checkEligiblity(a) {
  let result;
  if (a >= 18) {
    result = "You are eligible for vote";
  } else {
    result = "You are not eligible for vote";
  }
  console.log(result);
  return result;
}
checkEligiblity(17);

/* Task 3: Write a program to find the largest of three numbers using nested if-else statements. */
function largestNum(a, b, c) {
  let largest;
  if (a >= b) {
    if (a >= c) {
      largest = a;
    } else {
      largest = c;
    }
  } else {
    if (b >= c) {
      largest = b;
    } else {
      largest = c;
    }
  }

  console.log(`The largest number among ${a}, ${b}, and ${c} is: ${largest}`);

  return largest;
}

largestNum(24, 54, 99);

/* Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. */
function printDays(n) {
  n -= 1;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day;

  switch (n) {
    case 0:
      day = days[0];
      break;
    case 1:
      day = days[1];
      break;
    case 2:
      day = days[2];
      break;
    case 3:
      day = days[3];
      break;
    case 4:
      day = days[4];
      break;
    case 5:
      day = days[5];
      break;
    case 6:
      day = days[6];
      break;
    default:
      day = "Please chose a number between 1 to 7";
  }
  console.log(`Week Start with Sunday and your day is ${day}`);
  return day;
}
printDays(5);

/* Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.*/
function assignGrade(score) {
  let grade;

  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80:
      grade = "B";
      break;
    case score >= 70:
      grade = "C";
      break;
    case score >= 60:
      grade = "D";
      break;
    case score >= 50:
      grade = "E";
      break;
    default:
      grade = "F";
  }
console.log(`Student score: ${score}, Grade: ${grade}`);
  return grade;
}
assignGrade(75)

/* In a switch statement, each case should be a specific value (like a number or a string). You’re using expressions (e.g., grade >= 90 && 100 <= grade) as case conditions, which won’t work as expected. */

/* Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console. */
function oddEven(n) {
  const result = n % 2 == 0 ? `${n} is a even number` : `${n} is a odd number`;

  console.log(`${result}`);
}
oddEven(7);

/* Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console. */
function isLeapYear(year) {
  if (year % 400 || (year % 100 && year % 4)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
isLeapYear(2004);