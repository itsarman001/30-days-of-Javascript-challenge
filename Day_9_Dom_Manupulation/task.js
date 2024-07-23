// Task 1
document.getElementById("task1").textContent = "Task 1 Completed";

// Task 2
const elems = document.getElementsByClassName("task2");
for (const elem of elems) {
  elem.style.backgroundColor = "yellow";
}

// Task 3
const newDiv = document.createElement("DIV");
newDiv.innerHTML = "This a new div Task 3 complteted";

document.body.appendChild(newDiv);

// Task 4
const li = document.createElement("LI");
li.innerHTML = "This a new div Task 4 complteted";
document.getElementById("task4").appendChild(li);

// Task 5
function remove() {
  document.getElementById("task5").remove();
}

// Task 6
function removeLastChild() {
  document.getElementById("task4").lastElementChild.remove();
}

// Task 7
function changeImg() {
  document.getElementById("task7").setAttribute("src", "mountains.jpg");
}

// Task 8
function addStyle() {
  const elem = document.getElementById("task8");
  elem.classList.add("mystyle");
}

function removeStyle() {
  const elem = document.getElementById("task8");
  elem.classList.remove("mystyle");
}

document.getElementById("task9").addEventListener("click", () => {
  alert("Button clicked");
  document.getElementById("task9-p").innerText = "You clicked the button";
});

document.getElementById("task9").addEventListener("mouseover", () => {
  document.getElementById("task9-p").style.border = "2px solid green";
});