function addTask(textFieldValue) {
    if (!textFieldValue) return;
    const li = liCreator(textFieldValue);
    tasksList.appendChild(li);
    clearTextField();
    saveTasks();
};

function liCreator(textFieldValue) {
    const li = document.createElement('li');
    li.innerText = textFieldValue;
    const deleteButton = createDeleteButton();
    li.appendChild(deleteButton);
    return li;
};

function createDeleteButton() {
    const input = document.createElement('input');
    input.setAttribute('type', 'button');
    input.setAttribute('value', 'Delete');
    input.setAttribute('class', 'delete-button');
    return input;
};

function clearTextField() {
    textField.value = '';
    textField.focus();
};

function saveTasks() {
    const liNodeList = tasksList.querySelectorAll('li');
    const tasks = [];
    for (let li of liNodeList) {
        tasks.push(li.innerText);
    };
    const savedTasksJSON = JSON.stringify(tasks);
    localStorage.setItem('savedTasksJSON', savedTasksJSON);
};

const textField = document.querySelector('.text-field');
const addButton = document.querySelector('.add-button');
const tasksList = document.querySelector('.tasks-list');

addButton.addEventListener('click', function() {
    addTask(textField.value);
});

document.addEventListener('keypress', function (e) {
    if (e.target === textField && e.key === 'Enter') {
        addTask(textField.value);
    };
});

document.addEventListener('click', function (e) {
    const element = e.target;

    if (element.classList.contains('delete-button')) {
        element.parentElement.remove();
        saveTasks();
    };
});

function restoreTasks() {
    const restoredTasksJSON = localStorage.getItem('savedTasksJSON');
    const restoredTasksText = JSON.parse(restoredTasksJSON);
    for (let task of restoredTasksText) {
        addTask(task);
    };
};

restoreTasks();