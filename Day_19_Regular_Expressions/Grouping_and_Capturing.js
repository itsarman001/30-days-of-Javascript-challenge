// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const phoneNumber = "(123) 456-7890";
const groupRegex = /\((\d{3})\) (\d{3})-(\d{4})/;
const match = phoneNumber.match(groupRegex);
if (match) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
  console.log(`Your Central Code: ${areaCode}`);
  console.log(`Your Central Office Code: ${centralOfficeCode}`);
  console.log(`Your Line Number: ${lineNumber}`);
} else {
  console.log("Invalid Phone Number");
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "ilovejavascript@gmail.com";
const usernameRegex = /(\b[A-Za-z0-9._%+-]+)@([A-Za-z0-9.-]+\.[A-Z|a-z]{2,})/;

const username = email.match(usernameRegex);
if (username) {
  const [fullEmail, username, domain] = username;
  console.log("Username:", username);
  console.log("Domain:", domain);
} else {
  console.log("Invalid email address format.");
}
