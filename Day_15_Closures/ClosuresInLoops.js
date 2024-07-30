/* Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. */

function createFunctionArray(length) {
  const functions = [];
  for (let i = 0; i < length; i++) {
    functions.push(() => {
      console.log(i);
    });
  }
  return functions;
}

const functionArray = createFunctionArray(5);

functionArray[0]();
functionArray[1]();
functionArray[4]();
