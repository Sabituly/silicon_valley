let tasks;

let savedTasks = JSON.parse(localStorage.getItem("tasks"));

tasks =  savedTasks || [

    {id:1, title: "bread", completed: false},
    {id: 2, title: "milk", completed: false},
    {id:3, title: "eggs", completed: false},
    {id:4, title: "meat", completed: true}
];

const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};


const ulList = document.getElementById("ulList"),
      inputTask = document.getElementById("inputTask");



const renderTasks = () => {

      ulList.innerHTML = "";

      for(let i = 0; i < tasks.length; i++) {

          let li = document.createElement("li");
          li.classList.add("li");
          li.id =`li-${i}`;
          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = tasks[i].completed;

          let taskText = document.createElement("span");
          taskText.textContent = tasks[i].title;
          taskText.id = `taskText-${i}`;



          let btnDeleteTask = document.createElement("button");
          btnDeleteTask.classList.add("btn");
          btnDeleteTask.textContent = "x";
          btnDeleteTask.onclick = () => deleteCurrentTask(tasks[i].id); //callback функция чтобы вызвать её только по нажатию

          li.append(checkbox, taskText, btnDeleteTask);
          ulList.appendChild(li);

          checkbox.addEventListener("change", () => {
              tasks[i].completed = checkbox.checked; // записываю в массив статус чекбокса

              renderTasks();

              updateLocalStorage();
          });

          // const editSpan = document.getElementById(`taskText-${i}`);
          const editLi = document.getElementById(`li-${i}`);

          editLi.addEventListener("dblclick", (event) => {
              const target = event.target;

              if(target.tagName.toLowerCase() === 'span') {

                  const inputElement = document.createElement('input');
                  inputElement.type = "text";
                  inputElement.value = target.textContent;

                  target.replaceWith(inputElement);
                  inputElement.focus();

                  inputElement.addEventListener("blur" , () => {
                      const newSpan = document.createElement("span");
                      newSpan.textContent = inputElement.value;
                      inputElement.replaceWith(newSpan);
                      tasks[i].title = newSpan.textContent;

                      newSpan.addEventListener("dblclick", editTask);

                      renderTasks();
                  });
              }
              // console.log(editLi);
          });

          function editTask(event) {
              const target = event.target;

              if (target.tagName.toLowerCase() === 'span') {
                  const inputElement = document.createElement('input');
                  inputElement.type = 'text';
                  inputElement.value = target.textContent;

                  target.replaceWith(inputElement);
                  inputElement.focus();

                  inputElement.addEventListener('blur', () => {
                      const newSpan = document.createElement('span');
                      newSpan.textContent = inputElement.value;
                      inputElement.replaceWith(newSpan);

                      // Повторно добавляем обработчик dblclick
                      newSpan.addEventListener('dblclick', editTask);
                      renderTasks();
                  });
              }

              const initialSpan = document.getElementById(`taskText-${i}`);
              initialSpan.addEventListener('dblclick', editTask);
          }

      }

    console.log(tasks);
}




const deleteCurrentTask = (id) => {

    for(let i = 0; i < tasks.length; i++) {

        if(tasks[i].id === id) {
          tasks.splice(i,1);
          break;
        }
    }
    renderTasks();
    updateLocalStorage();
};

const addNewTask = () => {

    let newTaskId = tasks[tasks.length - 1].id + 1;
    let newTaskTitle = inputTask.value;

    let newTask = {

        id: newTaskId,
        title : newTaskTitle,
        completed : false
    }

    tasks.push(newTask);
    inputTask.value = "";
    renderTasks();
    updateLocalStorage();

}

renderTasks();

