//constant variables
const tasks = [];
const list = document.querySelector('.to-do-list');
const input = document.querySelector('.input-items');
const filter = document.querySelector('.filter');
const mode = document.querySelector('.mode');
const buttonAdd = document.querySelector('.btn-add-item');

//functions
function displayTasks(filter = false) {
    list.textContent = "";
    for (const i of tasks) {
        if (!filter || (filter && i.isDone)) {
            const newItem = document.createElement("li");
            newItem.innerHTML = i.isDone ? i.title + " ✓" : i.title;
            newItem.style = i.isDone ? "text-decoration: line-through; color: #29417d" : "text-decoration: none; color: white";
            newItem.classList.add("item");
            list.prepend(newItem);
            const btnHidden = document.createElement("button");
            const btnRemove = document.createElement("button");
            const btnDone = document.createElement("button");
            makeButton(btnHidden, newItem, "---", "hidden");
            makeButton(btnRemove, newItem, "Remove", "btn");
            makeButton(btnDone, newItem, "Done", "btn");
            btnDone.onclick = function () {
                i.isDone = i.isDone ? false : true;
                btnDone.style.background = i.isDone ? "gray" : 0;
                displayTasks(filter);
            }
            btnRemove.onclick = function () {
                newItem.remove();
                tasks.splice(tasks.indexOf[i], 1);
            }
        }
    }
}
function makeButton(button, item, text, btnClass) {
    button.classList.add(btnClass);
    button.textContent = text;
    item.prepend(button);
}
function addNewTask() {
    const newTask = { id: taskId, title: input.value, isDone: false };
    tasks.unshift(newTask);
    input.value = "";
    taskId++;
    displayTasks(!boolFilter);
}

//main
let boolFilter = true;
let boolMode = true;
let taskId = 1;

//event listeners
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        buttonAdd.click();
    }
});
filter.onclick = function () {
    filter.textContent = boolFilter ? "Show All" : "Show Done";
    displayTasks(boolFilter);
    boolFilter = !boolFilter;
}
mode.onclick = function () {
    let bgMode = document.querySelector('.header').style;
    bgMode.background = boolMode ? "rgb(5, 15, 29)" : "linear-gradient(60deg, rgb(0, 115, 255) 0%, rgba(0,172,193,1) 100%)";
    mode.textContent = boolMode ? "Light Mode" : "Dark Mode";
    boolMode = !boolMode;
}
buttonAdd.onclick = function () {
    addNewTask();
}
