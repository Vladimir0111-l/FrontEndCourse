let tasks = []

let task1 = {
  name: "Выучить JavaScript",
  status: false,
}

let task2 = {
  name: "Купить продукты",
  status: false
}

let task3 = {
  name: "Сделать домашнее задание",
  status: false
}

let task4 = {
  name: "",
  status: false
}


function addTask(task, array) { 
  if (task.name == false) {
    console.log("название задачи не может быть пустым")
  } else {
    array.push(task)
  }
}

function changeToCompleted(task, array) {
  array.forEach(element => {
    if (element.name == task) {
      element.status = true;
    }
  });
}

function deleteTask(task, array) {
  array.forEach((element, index) => {
    if (element.name == task) {
      array.splice(index, 1);
    }
  });
}

function showTasks(array) {
  let status = "";
  array.forEach(element => {
    if (element.status == true) {
      status = "выполнена"
    }else {
      status = "невыполнена"
    }
    console.log(`Задача ${element.name} ${status}`)
  });
}
addTask(task1, tasks)
addTask(task2, tasks)
addTask(task3, tasks)
addTask(task4, tasks)
console.log(tasks)
showTasks(tasks)
changeToCompleted("Выучить JavaScript", tasks)
console.log(tasks)
showTasks(tasks)
deleteTask("Сделать домашнее задание", tasks)
console.log
showTasks(tasks)