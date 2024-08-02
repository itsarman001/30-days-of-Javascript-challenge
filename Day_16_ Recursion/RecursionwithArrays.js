// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function recursiveArray(arr, i = 0) {
  if (arr.length === i) return 0;
  return arr[i] + recursiveArray(arr, i + 1);
}

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [10, 20, 30];
const testArray3 = [5, 5, 5, 5, 5];

console.log(`Sum of [1, 2, 3, 4, 5]: is ${recursiveArray(testArray1)}`);
console.log(`Sum of [10, 20, 30]: ${recursiveArray(testArray2)}`);
console.log(`Sum of [5, 5, 5, 5, 5]: ${recursiveArray(testArray3)}`);

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxRecursiveArray(arr, max = 0, i = 0) {
  if (arr.length === i) return max;
  max = arr[i] > max ? (max = arr[i]) : max;
  return maxRecursiveArray(arr, max, i + 1);
}

console.log(`Largest number of [1, 2, 3, 4, 5]: is ${maxRecursiveArray(testArray1)}`);

console.log(`Largest number of [10, 20, 30]: is ${maxRecursiveArray(testArray2)}`);

  console.log(`Largest number of [5, 5, 5, 5, 5]: is ${maxRecursiveArray(testArray3)}`);
