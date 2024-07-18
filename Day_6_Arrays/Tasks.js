// Activity 1: Array Creation and Access

// Task 1
const arr = ["HTML", "CSS", "JAVASCRIPT"];
console.log("Task 1 " + arr);

// Task 2
console.log("Task 2 " + arr[0]);

// Activity 2: Array Methods (Basic)

// Task 3: Push
arr.push("Bootstrap");
console.log("Task 3: Push " + arr);

// Task 4: Pop
arr.pop();
console.log("Task 4: Pop " + arr);

// Task 5: Shhift
arr.shift();
console.log("Task 5: Shhift " + arr);

// Task 6: Unshift
arr.unshift(5, "HTML");
console.log("Task 6: Unshift " + arr);

// Activity 3: Array Methods (Intermediate)
const num = [1, 2, 3, 4, 5];

// Task 7: Map
const doubleNum = num.map((elem) => elem + elem);
console.log("Task 7: Map " + doubleNum);

// Task 8: Filter
const oddNum = num.filter((elem) => elem % 2 !== 0);
console.log("Task 8: Filter " + oddNum);

// Task 9: Reduce
const sumofNum = num.reduce((sum, elem) => (sum += elem));
console.log("Task 9: Reduce " + sumofNum);

// Task 10: Iterate usinf For Loop
console.log("Task 10: Iterate usinf For Loop");
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
// Task 11: Iterate usinf forEach Loop
console.log("Task 11: Iterate using forEach Loop");
arr.forEach((elem) => console.log(elem));

