const arrayOfTasks = [
    {
        id: 1,
        description : "Купить яйца",
        completed: false
    },
    {
        id: 2,
        description : "Купить хлеба",
        completed: false
    },
    {
        id: 3,
        description : "Купить молоко",
        completed: false
    }
];


const ulList = document.getElementById("ulList"),
      inputTask = document.getElementById("inputTask"),
      taskListTitle = document.getElementById("taskListTitle"),
      inputTitleList = document.getElementById("inputTitleList");

function _addTitleList() {

    if(inputTitleList.value === "") {
        alert("Введите название ваших дел");
        return;
    }

    taskListTitle.classList.add("nav-menu-h3");
    taskListTitle.textContent = inputTitleList.value;

    inputTitleList.value = "";
}



for( let i = 0; i < arrayOfTasks.length; i++) {
    let task = document.createElement("li");
    let inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    let taskText = document.createElement("span");
    let buttonDeleteTask = document.createElement("button");

    task.appendChild(inputCheckBox);
    task.appendChild(taskText);
    task.appendChild(buttonDeleteTask);
    taskText.textContent = arrayOfTasks[i].description;
    buttonDeleteTask.textContent = "delete";
    buttonDeleteTask.classList.add("delete");
    ulList.appendChild(task);

    buttonDeleteTask.onclick = function() {
        task.remove();
    };
    console.log("Works");
    console.log(arrayOfTasks);
};

let arrayNumber = arrayOfTasks.length;
function addTask(button) {
    let task = document.createElement("li");
    let inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    let taskText = document.createElement("span");
    let buttonDeleteTask = document.createElement("button");

    task.appendChild(inputCheckBox);
    task.appendChild(taskText);
    task.appendChild(buttonDeleteTask);
    taskText.textContent = inputTask.value;
    buttonDeleteTask.textContent = "delete";
    buttonDeleteTask.classList.add("delete");
    ulList.appendChild(task);

    // добавление функции к переменных
    buttonDeleteTask.onclick = function() {
        task.remove();
    };

    let newTask = { id:arrayNumber + 1,
                    description: inputTask.value,
                    completed:false };
    arrayOfTasks.push(newTask);
    console.log(arrayOfTasks);
};

