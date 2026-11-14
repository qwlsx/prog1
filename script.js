const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No tasks yet. Add your first task!";
        taskList.appendChild(emptyMessage);
        return;
    }

    tasks.forEach(function (task) {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.textContent = task.text;
        taskList.appendChild(taskItem);
    });
}

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    taskInput.focus();
    renderTasks();
}

taskForm.addEventListener("submit", addTask);
