/* Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. */
function generateId() {
  let idCounter = 0;
  return function () {
    return idCounter++;
  };
}

const generateUniqueId = generateId();

console.log(generateUniqueId()); // 0
console.log(generateUniqueId()); // 1
console.log(generateUniqueId()); // 2

/* Task 4: Create a closure that captures a user's name and returns a function that greets the user by name. */
function greeting() {
  const userName = "Sponge Bob";
  return function () {
    return `Hi, I am ${userName}`;
  };
}
const greet = greeting();
console.log(greet());
