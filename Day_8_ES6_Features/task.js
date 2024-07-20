// Task 1
const person = {
  name: "Sponge Bob",
  age: 31,
  details: function () {
    console.log(`Hi, I am ${this.name}, and i am ${this.age} years old`);
  },
};

person.details();

// Task 2
console.log("Task 2");
const message = `To write a multi-line string using template literals
you just need to write in multiple line in backticks`;

console.log(message);

// Task 3
const arr = [2, 3, 5, 1, 9];

let [num1, num2] = arr;
console.log(`${num1} and ${num2}`);

// Task 4
const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
};

// Task 5
const { title, author, year } = book;
console.log(`${title} was written by ${author} in ${year}`);

const array = ["Title", "Author", "Year", ...arr];
console.log(array);

// Task 6
const sumOfNums = (...num) => {
  return num.reduce((total, num) => total + num, 0);
};

console.log(sumOfNums(1, 2, 3, 4, 5));

// Task 7
const productOfN = (num1, num2 = 1) => num1 * num2;

console.log(productOfN(2));

// Task 8
const fullName = "Peter Patrick";
const age = 40;

const newPerson = {
  fullName,
  age,
  details() {
    console.log(`Hi, I am ${this.fullName}, and i am ${this.age} years old`);
  },
};

newPerson.details();

// Task 8
const firstName = "Pearl";
const lastName = "Krabs";
const ocupation = "unemployed";

const person3 = {
  [firstName + " " + lastName]: {
    ocupation,
  },
};

console.log(person3);
