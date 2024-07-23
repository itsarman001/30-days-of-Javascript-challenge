// Task 1
document
  .getElementById("task1")
  .addEventListener(
    "click",
    () =>
    (document.getElementById("taskPara1").textContent =
      "ParagraphTextContentchnaged")
  );
//Task2
document
  .getElementById("task2")
  .addEventListener(
    "dblclick",
    () => (document.getElementById("image").style.visibility = "visible")
  );
//Task3
document
  .getElementById("hover")
  .addEventListener(
    "mouseenter",
    () => (document.getElementById("hover").style.backgroundColor = "red")
  );
// Task 4
document
  .getElementById("hover")
  .addEventListener(
    "mouseleave",
    () => (document.getElementById("hover").style.backgroundColor = "beige")
  );

// Task 5
document.getElementById('task5').addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.code}`);
  document.getElementById('logs').textContent += `${e.code}`
})

document.getElementById('task6').addEventListener('keyup', (e) => {
  console.log(`Key pressed: ${e.key}`);
  document.getElementById('log').textContent += `${e.key}`
})