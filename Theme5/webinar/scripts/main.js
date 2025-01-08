document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});
// Загружаем задачи из локального хранилища.
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('taskList');
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick = "editTask(this)">Редактировать</button>
      <button onclick = "deleteTask(this)">Удалить</button>      
      `;
      taskList.appendChild(li);
  });
  filterTasks();
}
// Добавляем задачу из инпут
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  
  if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  li.innerHTML = `
      <span>${taskText}</span>
      <button onclick = "editTask(this)">Редактировать</button>
      <button onclick = "deleteTask(this)">Удалить</button>      
      `;
      taskList.appendChild(li);
      saveTasks();
      taskInput.value = "";
  filterTasks();
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

// редактирование задачи

function editTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector('span').textContent;
  const newTaskText = prompt("Введите новый текст задачи", taskText)
  if (newTaskText !== null && newTaskText.trim() !== "") {
    li.querySelector('span').textContent = newTaskText.trim();
  }
  saveTasks();
  filterTasks();
}

// фильтрация по тексту

function filterTasks() {
  const filterInput = document.getElementById('filterInput');
  const filterText = filterInput.value.toLowerCase();
  const taskList = document.getElementById('taskList');

  Array.from(taskList.children).forEach(li => {
    const taskText = li.querySelector('span').textContent.toLowerCase();
    if (taskText.includes(filterText)) {
      li.style.display = "";
    }
    else {
      li.style.display = "none";
    }
  })
}