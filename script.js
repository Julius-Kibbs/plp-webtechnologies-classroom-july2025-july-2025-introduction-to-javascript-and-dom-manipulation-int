// Declaring variable tasks
let tasks = []; //Stores tasks

// Function to add tasks
function addTask() {
    let taskInput = document.getElementById("taskInput").value;

    //Check if input is empty 
    if (taskInput === ""){
        alert("Tasks can't be empty");
        return;
    }

    tasks.push(taskInput);
    document.getElementById("taskInput").value = ""; //Clear input field
    displayTasks();
}

// Function to clear all tasks
function clearTasks() {
    if (tasks.length === 0) {
        alert("No task to clear");
        return;
    }

    tasks = []; // Clear the tasks
    displayTasks(); // Display empty task list
}

// Function to display tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing tasks


    // First loop
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];


    // DOM Interaction: Toggle completion on click
    li.onclick = function() {
        li.classList.toggle("Completed");
    };

    taskList.appendChild(li);
    }
}

// Second loop: Console display of tasks 
function logTasks() {
    tasks.forEach((task, index) => {
        console.log(`Task ${index + 1}: ${task}`);
    });
}