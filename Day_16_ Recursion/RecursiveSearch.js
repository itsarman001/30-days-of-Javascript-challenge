// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; // Base case: target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Found the target
  } else if (arr[mid] < target) {
    // Search the right half
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    // Search the left half
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const target1 = 7;
const target2 = 4;

console.log(
  `Index of ${target1} in the array: ${binarySearchRecursive(
    sortedArray,
    target1
  )}`
);
console.log(
  `Index of ${target2} in the array: ${binarySearchRecursive(
    sortedArray,
    target2
  )}`
);

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrencesRecursive(arr, target, index = 0) {
  // Base case: If we've reached the end of the array, return 0
  if (index === arr.length) {
    return 0;
  }

  // Check if the current element matches the target
  const currentElement = arr[index];
  const countFromRest = countOccurrencesRecursive(arr, target, index + 1);

  return currentElement === target ? countFromRest + 1 : countFromRest;
}

// Example usage:
const myArray = [1, 2, 3, 2, 4, 2, 5];
const targetElement = 2;

console.log(
  `Occurrences of ${targetElement} in the array: ${countOccurrencesRecursive(
    myArray,
    targetElement
  )}`
);
