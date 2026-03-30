const createTask = document.querySelector("#button-add-task");
const input = document.querySelector("#input-task");
const list = document.querySelector("#tasks");

// Сообщение о пустом списке
const noTaskMessage = document.createElement("p");
noTaskMessage.textContent = "no tasks yet";
noTaskMessage.id = "no-task-message";
noTaskMessage.style.color = "#abb9bd";

// Массив задач
let tasks = [];

// Проверка пустого списка
function updateNoTaskMessage() {
    const msg = document.querySelector("#no-task-message");
    if (tasks.length === 0 && !msg) {
        list.appendChild(noTaskMessage);
    } else if (tasks.length > 0 && msg) {
        msg.remove();
    }
}

// Функция добавления задачи в DOM
function addTaskToDOM(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        tasks = tasks.filter(t => t !== taskText); // удаляем задачу из массива
        localStorage.setItem("tasks", JSON.stringify(tasks)); // обновляем localStorage
        updateNoTaskMessage();
    });

    li.appendChild(deleteBtn);
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    deleteBtn.style.margin = "10px";

    list.appendChild(li);
}

// Функция добавления новой задачи
function addTask() {
    const taskText = input.value.trim();
    if (!taskText) return;

    addTaskToDOM(taskText);
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    updateNoTaskMessage();
}

// События
createTask.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

// Загружаем задачи из localStorage при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(taskText => addTaskToDOM(taskText));
    }
    updateNoTaskMessage();
});