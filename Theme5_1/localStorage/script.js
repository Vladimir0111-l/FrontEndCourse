// localStorage.setItem("id", "twat");
// localStorage.setItem("name", "twaast");
// sessionStorage.setItem("id", "test")
// const id = localStorage.getItem("id")
// console.log(id)
//  localStorage.removeItem("id")
//  localStorage.clear();
// const key = localStorage.key(1);
// console.log(key);

// let task = "";
// let tasks = [];
// localStorage.clear();
// do {
//   task = prompt("Enter task");
//   if (task !== null) {
//     tasks.push(task);
//     localStorage.setItem(`tasks`, JSON.stringify(tasks))
//   }
// } while (task !== null);

// const allTasks = JSON.parse(localStorage.getItem("tasks"));
// console.log(allTasks)

const array = [{id: 1, task: "task1"}, {id: 2, task: "task2"}]
localStorage.setItem("list", JSON.stringify(array))
const list = JSON.parse(localStorage.getItem("list"))
console.log(list);