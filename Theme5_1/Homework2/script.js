const input = document.querySelector("#input")
const inputButton = document.querySelector("#inputButton")
const textDiv = document.querySelector("#textDiv")

// сохранение имени в локальное хранилище
inputButton.addEventListener("click", () => {
  localStorage.setItem("name", input.value)
})
// console.log(localStorage.getItem("name"))
// Выводим текст с именем, если нажата кнопка сохранить имя
function showName() {
  const name = localStorage.getItem("name")
  if (name !== null) {
    textDiv.textContent = `Ваше имя = ${name}`  
  } else { textDiv.textContent = "нет имени"}
    
}
showName();


