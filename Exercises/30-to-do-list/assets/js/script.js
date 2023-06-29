function createDeleteButton() {
    const input = document.createElement('input');
    input.setAttribute('type', 'button');
    input.setAttribute('value', 'Delete');
    input.setAttribute('class', 'delete-button');
    return input;
};

function addTask() {
    if (!textField.value) return;

    const li = document.createElement('li');
    const deleteButton = createDeleteButton();
    li.innerText = textField.value;
    li.appendChild(deleteButton);
    tasksList.appendChild(li);
    textField.value = '';
    textField.focus();
};

const textField = document.querySelector('.text-field');
const addButton = document.querySelector('.add-button');
const tasksList = document.querySelector('.tasks-list');

addButton.addEventListener('click', addTask);

document.addEventListener('keypress', function (e) {
    if (e.target === textField && e.key === 'Enter') {
        addTask();
    };
});

document.addEventListener('click', function(e) {
    const element = e.target;

    if (element.classList.contains('delete-button')) {
        element.parentElement.remove();
    };
});