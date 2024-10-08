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

// Task 4
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

function throwErrorFunction() {
  try {
    throw new MyCustomError("This is a custom error!");
  } catch (error) {
    if (error instanceof MyCustomError) {
      console.error("Custom error caught:", error.message);
    } else {
      console.error("Other error caught:", error.message);
    }
  }
}

// Call the function
throwErrorFunction();


// Task 6: Create a promise that resolves or rejects, using .catch() to handle rejection.
const promise = new Promise((reject) => {
  try {
    const err = new Error("Promise rejected after 2 seconds!")
    setTimeout(() => {
      reject(err);
    }, 2000);
  } catch (error) {
    console.log(error.message);
  }

});


// Task 7: Use try-catch within an async function to handle errors from a promise.
const asyncAwait = async () => {
  try {
    throw new Error('Task 7 Custom Error')
  } catch (error) {
    console.log(error.message);
  }
}

asyncAwait()

// Task 8
function getData() {
  fetch('https://invalid-url-that-does-not-exist.com')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Data received:', data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error.message);
    });
}

getData()

// Task 9
const getWrongData = async () => {
  try {
    const data = await fetch('https://invalid-url-that-does-not-exist.com');
    if (!data.ok) {
      throw new Error('Network response was not OK');
    }
    return console.log('Data received:', data.json())
  }

  catch (error) {
    console.error('Error fetching data:', error.message);
  }

}

getWrongData()
