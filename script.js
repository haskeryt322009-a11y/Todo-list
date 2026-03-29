

const createTask = document.querySelector("#button-add-task");
const input = document.querySelector("#input-task");
const list = document.querySelector("#tasks")
// создаем все главные переменные

createTask.addEventListener("click", () => {

    const taskText = input.value;
    //берет текст из инпута

    if (taskText === "") return;
    //проверяет пустая ли строка ввода

    const li = document.createElement("li");
    //создаем задачу

    li.textContent = taskText;
    //добавляет текст к задаче

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";
    //создаем кнопку удаления

    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    })
    //обработчик удаления

    // 6. добавляем кнопку в li
    li.appendChild(deleteBtn);

    // 7. добавляем li в список
    list.appendChild(li);

    // 8. очищаем input
    input.value = "";


})




const choices = ["камень","ножницы" , "бумага"]

function getComputerChoice()  {
    let randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex]
} 


function checkWinner(player, computer) {

    if (player === computer) {
        return "Ничья";
    }

    if (player === "камень" && computer === "ножницы") {
        return "Игрок победил";
    }

    if (player === "ножницы" && computer === "бумага") {
        return "Игрок победил";
    }

    if (player === "бумага" && computer === "камень") {
        return "Игрок победил";
    }

    return "Компьютер победил";
}

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {

    let computerChoice = getComputerChoice();

    let result = checkWinner(playerChoice,computerChoice)

if (result === "Игрок победил") {
    playerScore++;
} else if (result === "Компьютер победил") {
    computerScore++;
}

    console.log(result, playerScore, computerScore)
}