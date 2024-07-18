/*
Let has the block scope. It can’t be accessible outside the particular code block ({block}).
*/

let a = "arman";
console.log(a);
function logLet() {
  let a;
  a = 10;
  console.log(a);
}
logLet();
// let a = "hello, world!"
// it will throw an error of redeclearing of global variable a;

(function undefVar() {
  if (true) {
    let b = "1";
    console.log("if undefVar is true b = " + b);
  } else {
    b = "b = 5";
    /* if undefVar is false log will pring b is undfined */
    console.log(b);
  }
})();

/*
# Global Variable Declaration:
1. You create a global variable using let with the initial value of 10.
2. This variable is accessible throughout your entire script.
Function Scope:
3. When you declare a variable inside a function (let’s call it “innerFunction”), that variable is scoped to that function.
It’s not accessible outside of that function.
# Redeclaration Inside innerFunction:
1. If you declare the same variable (let’s call it “myVar”) inside innerFunction, it will shadow (override) the global variable with the same name.
2. The global myVar will still exist, but within innerFunction, the local version takes precedence.
# Different Value:
- If you assign a different value to myVar inside innerFunction, it won’t affect the global myVar.
- The global myVar remains unchanged.
*/

const constVar = "chai aur code";
console.log("Const Global Variable outside the function " + constVar);
(function logConst() {
  const constVar = "chai aur react";
  console.log("Const local Variable insde the function " + constVar);

  constVar = "chai aur dum";
  console.log(
    "Const local reassigned Variable inside the function " + constVar
  );
})();

console.log(
  "Const Global Variable outside the function after calling it " + constVar
);
/*
1. **Global `constVar`**:
    - You declare a global constant variable named `constVar` with the value `"chai aur code"`.
    - This variable is accessible throughout your entire script.

2. **IIFE (Immediately Invoked Function Expression)**:
    - You define an IIFE (a function expression that is executed immediately).
    - Inside this IIFE (named `logConst`), you declare a local constant variable also named `constVar` with the value `"chai aur react"`.
    - You log the local value of `constVar` inside the IIFE, which will print `"chai aur react"`.

3. **Reassignment Attempt**:
    - You then attempt to reassign the local `constVar` inside the IIFE to `"chai aur dum"`.
    - However, this will result in an error because `const` variables cannot be reassigned once they are declared.

4. **Outside the IIFE**:
    - After the IIFE, you log the global value of `constVar`, which remains unchanged as `"chai aur code"`.

Remember that `const` variables are block-scoped, so the local `constVar` inside the IIFE does not affect the global one.
*/