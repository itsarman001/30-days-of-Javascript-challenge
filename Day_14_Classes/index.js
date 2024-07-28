// Task 1
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    return this;
  }

  static getGenericGreeting() {
    return `Hello there, i am ${this.firstName} ${this.lastName} & i am ${this.age} old`;
  }

  get greet(){
    return `Hi i am ${this.firstName} ${this.lastName}`
  } 

  set setFullName(name){
    let [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const spongeBob = new Person("Sponge", "Bob", 34);
console.log(spongeBob.greeting());

// Task 2
spongeBob.updateAge(35);
console.log(spongeBob.age);

// Task 3
class Student extends Person {
  static studentCount = 0;
  constructor(firstName, lastName, age, studentID) {
    super(firstName, lastName, age);
    this.studentID = studentID;
    Student.studentCount++;
  }

  getStudentID() {
    return this.studentID;
  }

  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }
}

const student1 = new Student("Vivek", 18, "v12345");
console.log(student1.studentID);

// Task 4
console.log(student1.greeting())

// Task 5
// this.age giving undefined even with giving a default age to age
console.log(Person.getGenericGreeting());

// Task 6
console.log(Student.studentCount);

// Task 7
console.log(spongeBob.greet);

// Task 8
spongeBob.setFullName = 'Your Name';
console.log(spongeBob.greet);