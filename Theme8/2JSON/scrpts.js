// Перевод объекта в строку ДЖСОН
const obj = {name: "Alice", age: 25};
const jsonString = JSON.stringify(obj);
console.log(jsonString);

// Перевод из формата ДЖСОН в объект ДС
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);
console.log(parsedObj.age);