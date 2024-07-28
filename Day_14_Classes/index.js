// Task 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    return this;
  }

  static getGenericGreeting() {
    return `Hello there, i am ${this.name} & i am ${this.age} old`;
  }
}

const spongeBob = new Person("Sponge Bob", 34);
console.log(spongeBob.greeting());

// Task 2
spongeBob.updateAge(35);
console.log(spongeBob.age);

// Task 3
class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  getStudentID() {
    return this.studentID;
  }

  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }
}

const student = new Student("Vivek", 18, "v12345");
console.log(student.studentID);

// Task 4
console.log(student.greeting())

// Task 5
// this.age giving undefined even with giving a default age to age
console.log(Person.getGenericGreeting());
