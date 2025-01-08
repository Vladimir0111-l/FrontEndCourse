document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});
// Загружаем задачи из локального хранилища.
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('taskList');
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.addEventListener('dblclick', editTask()) 
    li.innerHTML = `
      <span>${tas}</span>
      <button onclick = "completeTask(this)">отметить как выполненную</button>
      <button onclick = "uncompleteTask(this)">отметить как невыполненную</button>
      <button onclick = "deleteTask(this)">Удалить</button>   
      <button onclick = "editTask(this)">Редактировать</button>       
    
      `;
      taskList.appendChild(li);
  });
}
// Добавляем задачу из инпут
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.classList.add('uncompleted')
  li.innerHTML = `
      <span>${taskText}</span>
      <button onclick = "completeTask(this)">отметить как выполненную</button>
      <button onclick = "uncompleteTask(this)">отметить как невыполненную</button>
      <button onclick = "deleteTask(this)">Удалить</button>
      <button onclick = "editTask(this)">Редактировать</button>       
      `;
      taskList.appendChild(li);
      saveTasks();
      taskInput.value = "";
}

// Сохраняем задачи в локальное хранилище
function saveTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = Array.from(taskList.children).map(li => li.querySelector('span').textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

// удаление задачи
function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
  saveTasks();
  filterTasks();

}

// выполнить задачу
function completeTask(button) {
  const li = button.parentElement;
  li.setAttribute('class', 'completed')
  saveTasks();
}

// отменить выполнение задачи
function uncompleteTask(button) {
  const li = button.parentElement;
  li.setAttribute('class', 'uncompleted')
  saveTasks();
}

// Показать все задачи
function showAll() {
  const taskList = document.getElementById('taskList');
  Array.from(taskList.children).forEach(li => {
      li.style.display = "";
  })
}

// Показать выполненные
function showCompleted() {
  const taskList = document.getElementById('taskList');
  Array.from(taskList.children).forEach(li => {
    if (li.className ==="completed") {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }

  })
}

// Показать невыполненные
function showUncompleted() {
  const taskList = document.getElementById('taskList');
  Array.from(taskList.children).forEach(li => {
    if (li.className ==="uncompleted") {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  })
}
// редактирование задачи

function editTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector('span').textContent;
  const newTaskText = prompt("Введите новый текст задачи", taskText)
  if (newTaskText !== null && newTaskText.trim() !== "") {
    li.querySelector('span').textContent = newTaskText.trim();
  }
  saveTasks();
}