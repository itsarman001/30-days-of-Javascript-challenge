// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function validatePassword(password) {
  if (passwordRegex.test(password)) {
    console.log("Valid password! 🎉");
  } else {
    console.log("Invalid password. Please follow the requirements.");
  }
}

// Example usage:
validatePassword("MyP@ssw0rd"); // Should be valid
validatePassword("weakpassword"); // Should be invalid

/*
Explanation:
^: Matches the start of the string.
(?=.*[a-z]): Requires at least one lowercase letter.
(?=.*[A-Z]): Requires at least one uppercase letter.
(?=.*\d): Requires at least one digit.
(?=.*[@$!%*?&]): Requires at least one special character.
[A-Za-z\d@$!%*?&]{8,}: Matches any combination of uppercase, lowercase, digits, and special characters, with a minimum length of 8 characters.
$: Matches the end of the string.
*/

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

function validateURL(url) {
  const urlRegex =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+)\.([a-zA-Z]{2,6})(\/.+)?$/;
  const isValid = urlRegex.test(url);

  if (isValid) {
    console.log(`URL ${url} is valid`);
  } else {
    console.log(`URL ${url} is invalid`);
  }

  return isValid;
}

const url = "www.google.com";

validateURL(url);
/*
Explaination:

1. `^`: This anchors the pattern to the start of the string.
2. `(https?:\/\/)?`: This part matches an optional protocol (either "http://" or "https://"). The `?` makes the entire group optional.
3. `(www\.)?`: This matches an optional "www." prefix. Again, the `?` makes it optional.
4. `([a-zA-Z0-9]+)`: This captures the domain name. It allows one or more alphanumeric characters (letters or digits).
5. `\.`: This matches the literal dot (period) character.
6. `([a-zA-Z]{2,6})`: This captures the top-level domain (TLD), which consists of 2 to 6 letters (e.g., ".com", ".io", ".xyz").
7. `(\/.+)?`: This captures an optional path segment. It starts with a slash (`/`) and can be followed by one or more characters.
8. `$`: This anchors the pattern to the end of the string.

Let's break down an example URL using this pattern:
- `https://www.example.com/path/to/resource`
    - Protocol: `https://`
    - "www." prefix: Present
    - Domain: `example`
    - TLD: `.com`
    - Path: `/path/to/resource`

This regular expression is designed to match URLs with varying components, allowing for flexibility in how URLs are formatted. However, keep in mind that it's a simplified version, and real-world URL validation might require additional checks (such as handling query parameters or special characters).
*/
