// Task 1
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds!");
    }, 2000);
});

promise1.then((message) => {
    console.log(message);
});


// Task 2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Promise rejected after 2 seconds!"));
    }, 2000);
});

promise2.catch((error) => {
    console.error(error.message);
});

// Task 3
function fetchDataFromServer() {
    return fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => {
            console.log("Data received:", data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

fetchDataFromServer();

// Task 4
async function logResolvedValue() {
    try {
        const result = await promise1;
        console.log("Resolved value:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

logResolvedValue();

// Task 5
async function logRejectedError() {
    try {
        await promise2;
    } catch (error) {
        console.error("Rejected error:", error.message);
    }
}

logRejectedError();

// Task 6
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
        console.log("Fetched data using promises:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Task 7
async function fetchDataAsync() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Fetched data using async/await:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchDataAsync();

// Task 8
Promise.all([promise1, promise2])
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Task 9
Promise.race([promise1, promise2])
    .then((result) => {
        console.log("First promise resolved:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
