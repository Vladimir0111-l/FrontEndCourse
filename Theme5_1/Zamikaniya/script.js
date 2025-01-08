// function createCount() {
//   let count = 0;
//   function addCount() {
//     count++;
//     return count;
//   }
//   return addCount;
// }

// const counter = createCount();
// console.log(counter());
// console.log(counter());

// function createBudget() {
//   let balance = 0;
//   function add(amount) {
//     balance += amount;
//     return balance; 
//   }
//   return add;
// }

// const myBudget = createBudget();
// console.log(myBudget(100))
// console.log(myBudget(300))


function createBudget() {
  let balance = 0;
  return {
    add(amount) {
      balance += amount;
    }, 
    buy(amount) {
      balance -= amount;
    },
    getBalance() {
      return balance
    }
  };
}

const myBudget = createBudget();
console.log(myBudget.add(100))
console.log(myBudget.buy(300))
console.log(myBudget.getBalance())