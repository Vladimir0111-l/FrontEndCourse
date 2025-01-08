//1
let a = 0;
const res1 = a === 0 ? " = 0" : a > 0 ? "a > 0" : "a < 0"
console.log(res1)
//2
num1 = 23;
num2 = 234;
operator = "asdfdasd"
res2 = null;
switch (operator) {
  case "+":
    res2 = num1 + num2;
    break;
  case "-":
    res2 = num1 - num2;
    break;
  case "/":
    res2 = num1 / num2;
    break;
  case "*":
    res2 = num1 * num2;
    break;
  default:
    res2 = "dont know"
}
console.log(res2)

//3
let time = 243;
let res3 = null;
switch (time) {
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:  
    res3 = "morning";
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17: 
    res3 = "noon"
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23: 
    res3 = "evening";
    break;
  case 24:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5: 
    res3 = "night";
    break;
  default:
    res3 = "dont know"
}

console.log(res3)