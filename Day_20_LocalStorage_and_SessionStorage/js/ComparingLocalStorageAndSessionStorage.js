// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.
const myData = "userData";
const myObject = { name: "Sponge Bob", age: 33 };

function storeData(key = myData, value = myObject) {
  if (key == null && value == null)
    return console.log("Please Provide a key and value");
  const serializedValue =
    typeof value === "object" ? JSON.stringify(value) : value;
  localStorage.setItem(key, serializedValue);
  sessionStorage.setItem(key, serializedValue);
  console.log("Data Stored 🗃️");
}

function getData(key = myData) {
  if (key == null) return console.log("Please Provide a key");
  if (key !== null && key !== "") {
    console.log("Data Fetched 📩, Check Console.log");
    const localValue = JSON.parse(localStorage.getItem(key));
    console.log(`Data from Local Storage for "${key}"`, localValue);

    const sessionValue = JSON.parse(sessionStorage.getItem(key));
    console.log(`Data from Session Storage for "${key}"`, sessionValue);
  } else {
    console.log("Nothing to Fetch 🤷‍♂️, Store Data 🗃️ First...");
  }
}

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearData(key =myData) {
  if (key !== null && key !== "") {
    localStorage.removeItem(key);
    sessionStorage.removeItem(key);
    console.log("Data Cleared 🗑️");
    console.log("Check Application tab Local Storage and Session Storeage");
  } else {
    console.log("Nothing to Clear 🤷‍♂️...");
  }
}

// ? will do it later else case not working even when key doesnot have a dafault value in clearData() function
// > will add a method to create a key and value