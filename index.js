const addButton = document.getElementById("add-button");
const clearAllButton = document.getElementById("clear-all-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", clearAllTasks);
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
