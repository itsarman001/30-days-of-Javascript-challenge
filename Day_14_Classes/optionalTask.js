// Task 9
class Account {
  #balance = 0;

  constructor(fullName, age, type = "Savings", balance = 0) {
    this.fullName = fullName;
    this.age = age;
    this.type = type;
    this.#balance = balance;
  }

  set deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${amount} deposited to account`);
      console.log(`Your current account balance is ${this.#balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  set withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${amount} withdrawn from account`);
      console.log(`Your current account balance is ${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount");
    }
  }

  get accountInfo() {
    return `Account Holder: ${this.fullName}, Account Type: ${
      this.type
    }, Balance: ${this.#balance}`;
  }
  get getBalance() {
    console.log(this.#balance);
    return this.#balance;
  }
}

// Task 10
const customer1 = new Account("Vivek Singh", 30, "Savings", 1000);
console.log(customer1.accountInfo);
customer1.deposit = 200;
customer1.withdraw = 500;
