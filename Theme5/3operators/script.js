let num = 10;

if (num > 10) {
  console.log("> 10")
} else {
  console.log("<= 10")
}

(num > 10) ? console.log(">10") : console.log("<= 10");

const result1 = (num > 10) ? "> 10" : "<= 10";
console.log(result1)

let name = "";

if (name) {
  console.log("Hello")
} else {
  console.log("no hello")
}

function sayHello(name) {
  if (name) {
    return `Hello, ${name}`
  } else {
    return "Hello noname"
  }
}
function sayHello2(name) {
  return (name) ? `Hello, ${name}` : "nanana"
}
console.log(sayHello(0))
console.log(sayHello2(214))

num = 23;
let result = null;
if (num === 10) {
  result = "num = 10" 
} else if (num > 10) {
  result = " num > 10"
} else {
  result = "num < 10"
}
console.log(result)

const result2 = num === 10 ? "> 10" : num < 10 ? "num > 10" : "num < 10"
console.log(result2) 