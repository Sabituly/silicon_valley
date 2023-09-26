let _toDoList, _inputTitleList;
_toDoList = document.getElementById("toDoList");
_inputTitleList = document.getElementById("inputTitleList");
// _addButton = document.getElementById("addTask");

function _addTitleList() {

    if(_inputTitleList.value === "") {
        alert("Введите название ваших дел");
        return;
    }
    let nav = document.createElement("nav");
    let randomNumber = Math.ceil(Math.random());
    let _randomId = randomNumber + "randomId";

    console.log(_randomId);

    nav.innerHTML = `<div class="nav-menu" id="newTasks">
                     <button id="deleteTitleList" class="deleteTitleList" onclick="deleteTitleList(this)">X</button>
                     <h3 class="nav-menu-h3" id="titleList">${_inputTitleList.value}</h3>
                     <div class="new-tasks">
                         <input type="text" placeholder="Введите задачу" class="inputText" id="inputTask">
                         <button class="add" onclick="_addTask(`${_randomId}`)">`;
    _toDoList.appendChild(nav);
    console.log(_toDoList);
    _inputTitleList.value = "";

}
function _addTask(inputElement) {

   let _ulMenu = document.getElementById("ulMenu");


    if(inputElement.value === "") {
        alert("Введите новую задачу");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" name = "first-task"> ${inputElement.value} <button class="delete" onclick="deleteTask(this)">delete</button>`;
    _ulMenu.appendChild(li);
    inputElement.value = "";
}

function deleteTask() {

    let _ulMenu = document.getElementById("ulMenu");
    _ulMenu.parentElement.removeChild(_ulMenu);
}

// function deleteTitleList(button) {
//     let _newTasks = button.closest('.nav-menu');
//     if (_newTasks) {
//         _newTasks.parentElement.removeChild(_newTasks);
//     } else {
//         console.error('Parent element not found.');
//     }
// }

function deleteTitleList() {
    let _newTasks = document.getElementById("newTasks");
    _newTasks.parentElement.removeChild(_newTasks);
}