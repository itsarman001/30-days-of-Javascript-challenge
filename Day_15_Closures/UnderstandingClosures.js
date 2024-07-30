/* Task 1: Write a function that returns another function where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. */
function outerFun() {
  const date = Date.now();
  function innerFun() {
    console.log(date);
  }
  return innerFun();
}
outerFun();

/* Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter. */
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function getValue() {
    return count;
  }

  return { increment, getValue };
}

const counter = createCounter();

console.log(counter.getValue());
console.log(counter.increment());
console.log(counter.getValue());

