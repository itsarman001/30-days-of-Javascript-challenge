// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.

var reverse = function(x) {
    let y = ""
    for(let i =x.length-1; i >= 0; i--) {
        y+= x[i]
    }
    console.log(y)
};

reverse(123)