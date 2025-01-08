// for (let i = 0; i < 10; i++) {
  
//   for (j = 0; j < 2; j++) {
//     console.log(`i = ${i}, j = ${j}`)
//   }
// }

let i = 10;

// while (i) {
//   console.log(i)
//   --i
// }

// do {
//   console.log(i)
//   i--
// } while (i);

// for (let i = 0; i < 10; i++) {
  
//   for (j = 0; j < 2; j++) {
//     console.log(`i = ${i}, j = ${j}`)
    
//   }
//   if (i == 5) {break;}
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {continue;}
//   for (j = 0; j < 2; j++) {
//     console.log(`i = ${i}, j = ${j}`)
    
//   }
// }

let array = ["sad", "ewr", "asdsa", "ewrwer"]

// for (i = 0; i < array.length; i++) {
//   console.log(array[i])
// }

// for (let item in array) {
//   console.log(item)
// }

// for (let item of array) {
//   console.log(item)
// }

person = {
  name: "lob",
  age: 213,
}

for (let key in person) {
  console.log(key, person[key])
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
