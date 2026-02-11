/**
 * ToDo List Controller
 * Follows Airbnb Style Guide (ES6+, const/let, arrow functions)
 */

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const createTodoItem = (taskText) => {
  // 1. Create the container (li)
  const li = document.createElement('li');
  li.className = 'todo-item';

  // 2. Create the checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  // 3. Create the text span
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = taskText;

  // 4. Create the delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '🗑'; // Using a trash emoji for simplicity
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // 5. Assemble and return
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
};

const handleAddTodo = (event) => {
  event.preventDefault();

  const taskValue = todoInput.value.trim();

  if (taskValue !== '') {
    const newTodo = createTodoItem(taskValue);
    todoList.appendChild(newTodo);
    todoInput.value = ''; // Clear input
  }
};

// Event Listeners
todoForm.addEventListener('submit', handleAddTodo);