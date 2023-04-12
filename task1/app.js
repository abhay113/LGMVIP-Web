
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December",];

//setting heading as today's date
let today = new Date();
today =days[today.getDay()] +", " +today.getDate() + "&nbsp" +months[today.getMonth()];

let heading = document.querySelector("#heading");
heading.innerHTML = today;
// Add task function
function addTask() {
  // Create task elements
  if (taskInput.value === "") {
    alert("You must write something");
  } else {
    const taskItem = document.createElement("li");
    const taskText = document.createElement("span");
    const taskCheckbox = document.createElement("input");
    const taskRemoveButton = document.createElement("button");

    // Set up task elements
    taskCheckbox.type = "checkbox";
    taskText.innerText = taskInput.value;
    taskRemoveButton.innerText = "remove";

    // Add task elements to task item
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskRemoveButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";

    taskRemoveButton.addEventListener("click", removeTask);
  }
}

// Remove task function
function removeTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}

// Add task event listener
addButton.addEventListener("click", addTask);
