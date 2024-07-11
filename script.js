const btns = document.querySelectorAll('.btn');
const results = document.getElementById('results');
let calcArr = [];
//write code to make it so that you have to click a number first
//then you can add as many numbers but if you click an operator it stores that first number
//and lets you write a second number until you hit equals
//set a limit for how big the number can go

//display the full caclulation above the result
results.textContent = '0';

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        results.textContent = btn.id
    })
})







class Calculator {
    constructor(name) {
        this.name = name;
    }
    add(x,y) {
        return x+y;
    }
    subtract(x,y) {
        return x-y;
    }
    multiply(x,y) {
        return x*y;
    }
    divide(x,y) {
        return x/y;
    }
    percent(x) {
        let operation = x/100;
        return operation
    }
    squared(x) {
        return x*x
    }
    cubed(x) {
        return x*x*x
    }
    power(x,y) {
        let num = x;
        for(let i =1;i<y;i++) {
            num*=x
        }
        return num
        
    }
    calculate(x,operator,y) {
        if (operator == '+') {
           return this.add(x,y)
        }else if (operator == '-') {
            return this.subtract(x,y)
         } else if (operator == '*') {
            return this.multiply(x,y)
         }else if (operator == '/') {
            return this.divide(x,y)
         }else if (operator == '%') {
            return this.percent(x)
         } else if (operator == '^2') {
            return this.squared(x)
         }else if (operator == '^3') {
            return this.cubed(x)
         }else if (operator == '^') {
            return this.power(x,y)
         }


    }
}



let TI_182 = new Calculator('TI-182');
console.log(TI_182.name);
console.log(TI_182.add(3,5))
console.log(TI_182.subtract(3,5))
console.log(TI_182.multiply(3,5))
console.log(TI_182.divide(3,5))
console.log(TI_182.squared(3))
console.log(TI_182.cubed(3))
console.log(TI_182.power(2,2))

console.log(TI_182.calculate(3,'^2'))
