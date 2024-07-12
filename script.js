const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const results = document.getElementById("results");
const calculate = document.getElementById("calculate");
const negative = document.getElementById("negative");
const clear = document.getElementById("clear");
const bksp = document.getElementById("bksp");
const point = document.getElementById("point");

let numArr = [];
let operatorArr = [null];
var firstNum;
var secondNum;

results.textContent = 0;

point.addEventListener("click", () => {
  if(!numArr.includes('.')) {
    numArr.push(".");
    console.log(numArr);
  }
  
});

bksp.addEventListener("click", () => {
  numArr.splice(numArr.length - 1, 1);
  let first = "";
  for (num of numArr) {
    first += num;
  }
  results.textContent = first;
  firstNum = parseInt(first);

  if (numArr.length == 0) {
    results.textContent = 0;
  }
});

clear.addEventListener("click", () => {
  firstNum = 0;
  secondNum = 0;

  while (numArr.length > 0) {
    numArr.pop();
  }
  operatorArr = [null];
  results.textContent = 0;
});

negative.addEventListener("click", () => {
  if (operatorArr[0] == null) {
    firstNum = firstNum - firstNum * 2;
    results.textContent = firstNum;
  } else if (operatorArr[0] !== null && numArr.length > 0) {
    secondNum = secondNum - secondNum * 2;
    results.textContent = secondNum;
  }
});

number.forEach((element) => {
  element.addEventListener("click", () => {
    if (operatorArr[0] == null) {
      if(numArr.length<5) {
      numArr.push(element.id);
      let first = "";
      for (num of numArr) {
        first += num;
      }
      results.textContent = first;
      firstNum = Number(first);
    }
    } else if (operator[0] !== null) {
      if(numArr.length<5) {
      numArr.push(element.id);
      let second = "";
      for (num of numArr) {
        second += num;
      }
      results.textContent = second;
      secondNum = Number(second);
    }
    }
  });
});

operator.forEach((element) => {
  element.addEventListener("click", () => {
    operatorArr.pop();
    operatorArr.push(element.id);
    var operator = operatorArr[0];

    while (numArr.length > 0) {
      numArr.pop();
    }
  });
});

calculate.addEventListener("click", () => {
  let TI_182 = new Calculator("TI-182");
  let result = TI_182.calculate(firstNum, operatorArr[0], secondNum);
  if (typeof result == "number" && !numArr.includes('.')) {
    console.log(firstNum + operatorArr[0] + secondNum + " = " + result);
    results.textContent = result;
    firstNum = result;
    operatorArr[0] = null;
    while (numArr > 0) {
      numArr.pop();
    }
  }  else if (typeof result == "number" && numArr.includes('.')) {
    console.log(firstNum + operatorArr[0] + secondNum + " = " + result);
    results.textContent = result.toFixed(2);
    firstNum = result.toFixed(2);
    operatorArr[0] = null;
    while (numArr > 0) {
      numArr.pop();
    }
  }


});

class Calculator {
  constructor(name) {
    this.name = name;
  }
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
  percent(x) {
    let operation = x / 100;
    return operation;
  }
  squared(x) {
    return x * x;
  }
  cubed(x) {
    return x * x * x;
  }
  power(x, y) {
    let num = x;
    for (let i = 1; i < y; i++) {
      num *= x;
    }
    return num;
  }
  calculate(x, operator, y) {
    if (operator == "+") {
      return this.add(x, y);
    } else if (operator == "-") {
      return this.subtract(x, y);
    } else if (operator == "*") {
      return this.multiply(x, y);
    } else if (operator == "/") {
      return this.divide(x, y);
    } else if (operator == "%") {
      return this.percent(x);
    } else if (operator == "^2") {
      return this.squared(x);
    } else if (operator == "^3") {
      return this.cubed(x);
    } else if (operator == "^") {
      return this.power(x, y);
    }
  }
}
