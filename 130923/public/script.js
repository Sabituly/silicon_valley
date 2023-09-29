let _toDoList = document.getElementById("toDoList"),
    _inputTitleList = document.getElementById("inputTitleList");


function _addTitleList() {

    if(_inputTitleList.value === "") {
        alert("Введите название ваших дел");
        return;
    }

    //создание элементов
    let wrapperOfMenuTasks = document.createElement("div");
    let newTasks = document.createElement("div");
    let buttonDeleteTitleList = document.createElement("button");
    let h3TitleList = document.createElement("h3");
    let inputTitleTask = document.createElement("input");
    let buttonAddTask = document.createElement("button");

    newTasks.appendChild(inputTitleTask);
    newTasks.appendChild(buttonAddTask);
    wrapperOfMenuTasks.appendChild(h3TitleList);
    wrapperOfMenuTasks.appendChild(buttonDeleteTitleList);
    wrapperOfMenuTasks.appendChild(newTasks);
    _toDoList.appendChild(wrapperOfMenuTasks);

    //свойства элементов
    inputTitleTask.type = "text";
    wrapperOfMenuTasks.className = "nav-menu";

    buttonDeleteTitleList.classList.add("deleteTitleList");
    buttonDeleteTitleList.textContent = "X";
    h3TitleList.classList.add("nav-menu-h3");
    h3TitleList.textContent = _inputTitleList.value;
    newTasks.classList.add("new-tasks");

    inputTitleTask.classList.add("inputText");
    inputTitleTask.id = "inputTitleTask";
    inputTitleTask.placeholder = "Введите задачу";
    buttonAddTask.classList.add("add");
    buttonAddTask.textContent = "add";
    // функции к элементам

    buttonDeleteTitleList.setAttribute("onclick", "deleteTitleList(this)");
    buttonAddTask.setAttribute("onclick","_addTask(this)"); // this значит эту кнопку
    _inputTitleList.value = "";    //

}
function _addTask(button) {

    //Переменные

    let _ulMenu = document.createElement("ul");
    let li = document.createElement("li");
    let inputCheckBox = document.createElement("input");
    let wrapperOfMenuTasks = button.closest(".nav-menu"); // ищет ближайщий элемент с заданными параметрами
    let inputTitleTask = button.parentElement.querySelector('input[type="text"]');

    let taskDescription = inputTitleTask.value;
    let divInputTitleValue = document.createElement("div");
    let buttonDeleteTask = document.createElement("button");

    // свойства переменных

    li.classList.add("new-tasks");
    inputCheckBox.type = "checkbox";
    inputCheckBox.classList.add("checkbox");
    divInputTitleValue.textContent = inputTitleTask.value;
    buttonDeleteTask.classList.add("delete");
    divInputTitleValue.textContent = taskDescription;

    buttonDeleteTask.textContent = "delete";
    inputTitleTask.classList.add("inputText");
    //


    //функции элементов
    buttonDeleteTask.setAttribute("onclick", "deleteTask(this)");
    if(inputTitleTask.value === "") {
        alert("Введите новую задачу");
        return;
    }

    inputTitleTask.value = "";

    li.appendChild(inputCheckBox);
    li.appendChild(divInputTitleValue);
    li.appendChild(buttonDeleteTask);

    // this.nextSibling.appendChild(li);
    _ulMenu.appendChild(li);
    wrapperOfMenuTasks.appendChild(_ulMenu);
}


function deleteTask(button) {

    let li = button.parentElement;
    li.remove();
}


function deleteTitleList(button) {
    let _newTasks = button.parentElement;
    _newTasks.remove();
};