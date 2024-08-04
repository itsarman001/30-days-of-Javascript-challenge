// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
const loginForm = document.getElementById("loginForm");
const ShowUsername = document.getElementById("ShowUsername");
const ShowPassword = document.getElementById("ShowPassword");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = {
    username,
    password,
  };

  localStorage.setItem("loginUser", JSON.stringify(user));

  ShowUsername.textContent = user.username;
  ShowPassword.textContent = user.password;
  // this is for task 4
  location.reload()
});

const loginUser = JSON.parse(localStorage.getItem('loginUser'))
console.log(loginUser);

if (loginUser) {
  ShowUsername.textContent = loginUser.username;
  ShowPassword.textContent = loginUser.password;
  
}

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

const displayUsername = document.getElementById("displayUsername");
const displayPassword = document.getElementById("displayPassword");

if (loginUser) {
  displayUsername.textContent = loginUser.username;
  displayPassword.textContent = loginUser.password;
}

function removeUser() {
  localStorage.removeItem('loginUser')
  location.reload();
}