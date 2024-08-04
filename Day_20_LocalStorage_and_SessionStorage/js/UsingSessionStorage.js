// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
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

  sessionStorage.setItem("loginUser", JSON.stringify(user));

  ShowUsername.textContent = user.username;
  ShowPassword.textContent = user.password;
});

const loginUser = JSON.parse(sessionStorage.getItem('loginUser'))
console.log(loginUser);

if (loginUser) {
  ShowUsername.textContent = loginUser.username;
  ShowPassword.textContent = loginUser.password;
}

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
function removeUser() {
    sessionStorage.removeItem('loginUser')
    location.reload();
  }
