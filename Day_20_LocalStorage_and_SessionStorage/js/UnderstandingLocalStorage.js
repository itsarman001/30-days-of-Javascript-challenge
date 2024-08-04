// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
localStorage.setItem('stringValue', "Hello World")
const string = localStorage.getItem('stringValue');
console.log(string);

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const user = {
    fullName: "Sponge Bob",
    email: "spongebob@krabs.com",
    age: 33,
    occupation: "Fry Cook"
}

localStorage.setItem("user", JSON.stringify(user));
let retrivedUser = localStorage.getItem('user')
if (retrivedUser) {
    retrivedUser = JSON.parse(retrivedUser)
    console.log(retrivedUser);
} else {
    console.log("NO User Found");
}