var btnNewTask = document.querySelector(".btn-new-task");
var btnClearList = document.querySelector(".btn-clear-list");
var list = document.querySelector(".contentToDo");

localLoad();

function addTask() {
    var newTaskField = document.querySelector("#newTaskTextArea");
    var txtNewTask = newTaskField.value;
    if (txtNewTask.length > 0) {
        var listItem = document.createElement('li');
        listItem.textContent = txtNewTask;
        list.appendChild(listItem);
        newTaskField.value = "";
        localSave();
    }
};

btnNewTask.addEventListener('click', addTask);

function cross(e) {
    e.target.classList.toggle('done');
};

list.addEventListener('click', cross, false);

function clearList() {
    if (confirm("Are yor shure to clear all your tasks?")) {
    list.innerHTML = '';
    localSave();
    };
};

btnClearList.addEventListener('click', clearList);

// use local storage to save the results:
function localLoad() {
    var content = document.getElementById("listToDo");
    content.innerHTML = localStorage.getItem("listContent");
};

function localSave() {
    localStorage.setItem("listContent", list.innerHTML);
};
