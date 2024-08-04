// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const str = "i love javaScript";
const strRegex = new RegExp(/javaScript/g);
const newStr = str.match(strRegex);
console.log(newStr);

// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const digitStr = new RegExp(/[0-9]/g)
const str2 = "abk12lkj3k5hlk6k90"
const newStr2 = str2.match(digitStr)
console.log(newStr2);

