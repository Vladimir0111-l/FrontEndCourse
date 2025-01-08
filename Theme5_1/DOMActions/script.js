const btn = document.querySelector("button");
const inp = document.querySelector("input");
// btn.onclick = function () {alert("Test");}
// btn.addEventListener("click", () => {
//   alert("test");
//   const d = document.createElement("div");
//   d.textContent = "TEsT";
//   document.body.append(d); 
// })

// window.addEventListener("scroll", () => {
//   alert("scrolling");
// })

// inp.addEventListener("input", (event) => {
//   console.log(event.target.value);
// })

// btn.addEventListener("click", () => {
//   console.log(inp.value);
//   alert(`ur text is ${inp.value }`)
// })

// inp.addEventListener("focus", () => {

// })

// inp.addEventListener("blur", () => {
  
// })

// const inp2 = document.querySelector("#checkbox");
// console.dir(inp2)

// inp2.addEventListener("input", () => {
//   console.log(inp2.checked);
// });

btn.addEventListener("click", () => {
  const data = inp.value;
  const d = document.createElement("div");
  d.className = "card";
  d.innerHTML = `
  <h1> Hello</h1>
  <p> ur text is ${data} </p>`
  document.body.append(d);
  inp.value = ""
})