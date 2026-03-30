    const createTask = document.querySelector("#button-add-task");
    const input = document.querySelector("#input-task");
    const list = document.querySelector("#tasks");

    const noTaskMessage = document.createElement("p");
    noTaskMessage.textContent = "no tasks yet";
    noTaskMessage.id = "no-task-message";
    noTaskMessage.style.color = "#abb9bd";
    
// ------------------ Проверка сообщений ------------------
    function updateNoTaskMessage() {
        const msg = document.querySelector("#no-task-message");
        if (list.children.length === 0 && !msg) {
            list.appendChild(noTaskMessage);
        } else if (list.children.length > 0 && msg) {
            msg.remove();
        }
    }

    // проверяем при загрузке
    updateNoTaskMessage();

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {

        }
    });

    createTask.addEventListener("click", () => {
        const taskText = input.value;
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            li.remove();
            updateNoTaskMessage(); // проверяем после удаления
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);

        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        deleteBtn.style.margin = "10px";

        input.value = "";

        updateNoTaskMessage(); // проверяем после добавления
    });