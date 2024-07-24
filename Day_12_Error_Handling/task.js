// Task 1
function createError() {
  try {
    throw new Error("Error! Created using New Error Method");
    console.log("This line won't execute because of the caught error.");
  } catch (error) {
    console.error("Error caught:", error.message);
  }
  console.log("Program continues after error handling.");
}
// createError()

// Task 2
function division(a, b = 0) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    const result = a / b;
    console.log(result);
  } catch (error) {
    console.log(`Error caught: ${error.message}`);
  }
}

// division(5);

// Task 3
function divisionByZero(a, b = 0) {
  try {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    const result = a / b;
    console.log(result);
  } catch (error) {
    console.log(`Error caught: ${error.message}`);
  } finally {
    console.log("Due to an error we coudn't do the division");
  }
}
// divisionByZero(5)

// Task 6: Create a promise that resolves or rejects, using .catch() to handle rejection.
const promise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      reject(new Error("Promise rejected after 2 seconds!"));
  }, 2000);
  } catch (error) {
    console.log(error.message);
  }
  
});


// Task 7: Use try-catch within an async function to handle errors from a promise.

