// alert("Hello");

// let answer = confirm("yes or no");
// (confirm === true) ? alert("YES") : alert("NOOO");

// let name = prompt("ur name");
// (name.trim() === "") ? alert("GGGG") : alert(`Hello, ${name}`)

// let n = +prompt("put number here")

// if(isNaN(n)) {
//   alert("NANA")
// } else {
//   alert(n)
// }

let tasks = ["homework", "sex", "kex"];
function showTasks() {
  if(tasks.length === 0) {
    alert("0 tasks");
  } else {
    // tasks.forEach((element, index) => {
    //   alert(`Звдача № ${index + 1} - ${element}`)
    // });
    const result = tasks.reduce(
      (acc, element, index) => acc + `${index + 1}. ${element} \n`,
      "ur tasks: \n"
    )
    alert(result);
  }
}

function addTask() {
  const newTask = prompt("Enter task")
  if (newTask) {
    tasks.push(newTask);
    showTasks();
  } else {
    alert("error")
  }
}

function deleteTask() {
  if (tasks.length === 0) {
    alert("no task exists")
  }
  showTasks()
  const taskIndex = +prompt("what task to delete?") - 1
  if (taskIndex < 0 || taskIndex > tasks.length + 1 || isNaN(taskIndex)) {
    alert("incorrectNumber")
    return;
  }
  const deletedTask = tasks.splice(taskIndex, 1)
  alert(`task ${deletedTask} is deleted`)
  showTasks();

}

function main() {
  let choice = null;
  do {
    choice = +prompt("Choose one of: \n 0 - exit \n 1 - show \n 2 - add \n 3 - delete")
    switch(choice) {
      case 0:
        alert("exit")
        break;
      case 1:
        showTasks();
        break;
      case 2: 
        addTask();
        break;
      case 3:
        deleteTask();
        break;
      default:
        alert("incorrect choice")
    }
  } while (choice !== 0)
}

main();
