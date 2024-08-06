// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
// Log the indices for a few test cases.

const nums = [2, 7, 11, 15];
const target = 9;

function sumOfTwoNum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === target) return [i, j]
        }
    }
    return false
}

sumOfTwoNum(nums, target);
