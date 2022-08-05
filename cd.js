

const display = document.getElementById('display'); // main display
const main = document.getElementById('main'); // main div 
let number = document.getElementsByClassName('number'); // numbers 
let  operators = document.getElementsByClassName('operator'); // 2nd div
const button = document.getElementById('operators'); // buttons for operator 
const box = document.getElementById('box'); // number div 
let firstNum = document.getElementById('firstNum') // 1st display
let secondNum = document.getElementById('secondNum') // 2nd display 
let Operator = document.getElementsByClassName('operator') // operator 
let oprCollection = document.getElementsByClassName('specialOperator') // . & = 
let equals = document.getElementById('equals') // equals button 
let results = 0
let  firstOperand =  " "
let  secondOperand =  " "
let operator = " "; 
let zeroDisplay = 0


//  grabbing each number with onClick.
Array.from(number).forEach(num => {
    num.addEventListener('click', function (e) {
        //firstOperand = parseFloat(e.target.value)
        if (!operator) {
            firstOperand = parseFloat(e.target.value)
            console.log(firstOperand)
            display.innerText = firstOperand

        } else {
            secondOperand = parseFloat(e.target.value)
            console.log(secondOperand)
            display.innerText = parseFloat(e.target.value)

        }

    })
});


// grabbing each operator with onClick.
Array.from(Operator).forEach(opr  => {
    opr.addEventListener('click', function (e) {
        
    })
});


// grabbing decimal and equals with onClick. 
Array.from(oprCollection).forEach(spec => {
    spec.addEventListener('click', function (e) {
        if (spec = "=") {
            //equal()
        } else if (spec = ".") {
            console.log('this is a decimal point')
        }
       
    })
})



equals.addEventListener("click", function (d) {
    console.log('firstOperand',firstOperand)
    console.log('secondOperand', secondOperand)
    console.log('operator', operator)
    if (operator == "=") {
        let result = firstOperand + secondOperand
        console.log(result)
    }
})