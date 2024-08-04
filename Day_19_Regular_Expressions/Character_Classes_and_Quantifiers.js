// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text =
  "Lorem ipsum dolor sit amet, Consectetur adipiscing Elit.";
const getCapitalWords = new RegExp(/\b[A-Z][a-zA-Z]*\b/g);
const words = text.match(getCapitalWords);
console.log(words)

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const digitStr = new RegExp(/[0-9]/g)
const str2 = "abk12lkj3k5hlk6k90"
const newStr2 = str2.match(digitStr)
console.log(newStr2);
