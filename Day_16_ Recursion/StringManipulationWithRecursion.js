// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseStringRecursive(str) {
  if (str <= 1) return str;
  let lastChar = str[str.length - 1];
  let subStr = str.slice(0, -1);
  return lastChar + reverseStringRecursive(subStr);
}

// Example usage:
const testString1 = "hello";
const testString2 = "world";
const testString3 = "javascript";

console.log("// Task 5")
console.log(
  `Reversed "${testString1}": ${reverseStringRecursive(testString1)}`
);
console.log(
  `Reversed "${testString2}": ${reverseStringRecursive(testString2)}`
);
console.log(
  `Reversed "${testString3}": ${reverseStringRecursive(testString3)}`
);

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindromeRecursive(str) {
  if (str.length <= 1) return true;
  const firstChar = str[0].toLowerCase();
  const lastChar = str[str.length - 1].toLowerCase();
  if (firstChar !== lastChar) return false;

  const subStr = str.slice(1, -1);
  return isPalindromeRecursive(subStr);
}

//  Example usage:
const testString5 = "123454321";
const testString6 = "hello";
const testString7 = "A man, a plan, a canal, Panama";

console.log("// Task 6")
console.log(
  `Is "${testString5}" a palindrome? ${isPalindromeRecursive(testString5)}`
);
console.log(
  `Is "${testString6}" a palindrome? ${isPalindromeRecursive(testString6)}`
);
console.log(
  `Is "${testString7}" a palindrome? ${isPalindromeRecursive(testString7)}`
);
