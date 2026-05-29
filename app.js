const initialTasks = [];
let tasks = [...initialTasks]; 

const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');

const renderTasks = () => {
  taskList.innerHTML = ''; 
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    
    li.innerHTML = `<span>${task}</span> <small>`;
    
    li.addEventListener('click', () => li.classList.toggle('completed'));
    
    taskList.appendChild(li);
  });
};

const addNewTask = () => {
  const text = taskInput.value.trim();
  if (text === '') return alert('Please enter a task.');
  
  tasks.push(text); 
  taskInput.value = '';
  renderTasks();
};

addBtn.addEventListener('click', addNewTask);

renderTasks();
