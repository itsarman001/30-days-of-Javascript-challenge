// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
sessionStorage.setItem("sessionMessage", "I will be cleard as window close");
const message = sessionStorage.getItem("sessionMessage");
console.log("Task 5: " + message);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const spongeBob = {
  fullName: "Sponge Bob",
  email: "spongebob@krabs.com",
  age: 33,
  occupation: "Fry Cook",
};
sessionStorage.setItem("spongeBob", JSON.stringify(spongeBob));
const sessionUser = JSON.parse(sessionStorage.getItem("spongeBob"));
console.log("Task 6");
console.log(sessionUser);