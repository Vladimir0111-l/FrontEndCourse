let human = {
  name: "hel",
  age: 23,
  greet() {
    console.log(`Hello, ${this.name}`)
  }
}
console.log(human.age)
console.log(human["name"])
human.isAdult = true
console.log(human)
delete human.age
console.log(human.greet())