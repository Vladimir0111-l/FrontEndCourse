var count = 0;

function asd() {
  console.log("asd")
}

const test = function test() {
  console.log("123")
}

const test2 = () => {
  console.log(123)
}

const obj = {
  name: "Blob",
  age: "23",
  say: function(...data) {
    console.log(this)
    console.log(data)
  },
  say2: () => {
    console.log(this.name)
  }
}
obj.say();
obj.say2();
obj.say.apply("Hello", [1, 23, 4])
obj.say.call({user: "Alex"}, 34, 123, 213)

const test3 = obj.say.bind({user: "Mari"})
console.log(test3)