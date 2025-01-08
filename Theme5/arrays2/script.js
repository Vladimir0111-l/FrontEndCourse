let array = ["tea", "coffe", 'cola']

array.forEach((element, index, array) => {
  console.log(`Элемент ${element} с индексом ${index} в массиве ${array}`)
  
});

let arrayN = array.map((element, index, array) => {
  return `${element} is a drink ${index}`
})
console.log(arrayN)

let Numbers = [213, 54, 23, 234, 123, 1234, 23]
let sum = Numbers.reduce((acc, element) => acc + element)
console.log(sum)
let numbersF = Numbers.filter((element, index) => index > 2 && element % 2 === 0)
console.log(numbersF)
console.log(Numbers.indexOf(23, 3))
console.log(Numbers.lastIndexOf(23, 3))
console.log(Numbers.includes(66))
console.log(Numbers.slice(0, 2))
Numbers.splice(-1,2,666,666)
console.log(Numbers)
console.log(Numbers.concat(array, ["sad", 'asd']))
let a = Array.isArray(Numbers)
console.log(a)

let str = "k, f, a, ds, g, s, f, k"

let array1 = str.split(", ")
console.log(array1)
result = array1.filter((element, index) => index === array1.indexOf(element))
console.log(result)
console.log(result.join(", "))