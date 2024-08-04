// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const beginRegex = /^\w+/;
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const beginWord = text.match(beginRegex)
console.log(beginWord);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const endRegex = /\b\w+\b(?=\W*$)/;
const endWord = text.match(endRegex)
console.log(endWord);
