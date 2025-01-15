const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoBox = document.getElementById('todo-box');
const deleteAllBtn = document.getElementById('delete-all');

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const todoTextNode = document.createElement('span');
        todoTextNode.textContent = todoText;
        todoItem.appendChild(todoTextNode);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            todoBox.removeChild(todoItem);
        });
        todoItem.appendChild(deleteBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            todoInput.value = todoText; // Pre-fill the input with the current todo text
            todoBox.removeChild(todoItem); // Remove the item to be edited
        });
        todoItem.appendChild(editBtn);

        todoBox.appendChild(todoItem);
        todoInput.value = '';
    } else {
        alert('Please enter a todo!');
    }
}

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

deleteAllBtn.addEventListener('click', () => {
    todoBox.innerHTML = '';
});
