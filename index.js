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
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}

function clearAllTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.remove();
  }
