// let div = document.querySelector("header .hello");
// let p = document.querySelectorAll("p")
// p = document.querySelector("p")
// p.textContent = "New Text"
// p.innerHTML = "<span> hello </span>"
// // console.log(div);
// const answer  = confirm("Delete?");
// if (answer) {
//   p2.remove();  
// }
// p2 = document.querySelector("#p2")
// console.log(p)

// const newElem = document.createElement("footer");
// newElem.innerHTML = "<nav> <ol> <li> text </li> <li> text2 </li> </ol> </nav>";
// const p = document.querySelector("#p2")
// p.before(newElem);
// p.after(newElem);
// document.body.insertBefore(newElem, p);
// document.body.append(newElem);
// document.body.appendChild(newElem);
//document.body.prepend(newElem);
// newElem.style.color = "blue";
// newElem.style.fontSize = "40px";
// newElem.style.backgroundColor = "red";
// newElem.class = "myFooter";
// newElem.classList.add("container")

// const name = prompt("Enter ur name", "имя");
// const descr = prompt("Tell me about urself", "описание");

// const nameElem = document.querySelector(".user-card h2");
// const descrElem = document.querySelector(".user-card p");

// console.log(nameElem);
// console.log(descrElem);
// nameElem.textContent = name;
// descrElem.textContent = descr;

const list = [
  {name: "bob", descr: "1", age: 23}, 
  {name: "alex", descr: "2", age: 34}, 
  {name: "lij", descr: "3", age: 23}, 
  {name: "sda", descr: "4", age: 231}];

// list.forEach((element, index) => {
//   const card = document.createElement("div");
//   card.className = "user-card";

//   const h2 = document.createElement("h2");
//   const p = document.createElement("p");
//   const h3 = document.createElement("h3");
//   h2.textContent = element.name;
//   p.textContent = element.descr;
//   h3.textContent = `ur age is ${element.age}`;
//   // card.appendChild(h2);
//   // card.appendChild(p);
//   card.append(h2, p, h3)
//   console.log(card);
//   document.body.append(card);
// });

list.forEach((element, index) => {
  const card = document.createElement("div");
  card.className = "user-card";
  card.innerHTML = `
    <h2>
      ${element.name}
    </h2>
    <p>description ${element.descr}</p>
    <h3>
      age is ${element.age}
    </h3>
  `
  document.body.append(card);
})