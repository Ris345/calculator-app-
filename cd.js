
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
let operator = ""; // the akward space in the operator creates problems 
let zeroDisplay = 0


//  grabbing each number with onClick.
Array.from(number).forEach(num => {
    num.addEventListener('click', function (e) {
        //firstOperand = parseFloat(e.target.value)
        if (!operator) {
            firstOperand = parseFloat(e.target.value)
            //console.log(firstOperand)
            display.innerText += firstOperand
            console.log(firstOperand)
        } else {
            secondOperand = parseFloat(e.target.value)
            console.log(secondOperand)
            display.innerText += parseFloat(e.target.value)

        }
    })
});

// grabbing each operator with onClick.
Array.from(Operator).forEach(opr  => {
    opr.addEventListener('click', function (e) {
        operator = e.target.value
        
    })
});


// grabbing decimal and equals with onClick. 




equals.addEventListener("click", function (d) {
    console.log('firstOperand',firstOperand)
    console.log('secondOperand', secondOperand)
    console.log('operator', operator)
    console.log(equals.value)
    if (equals.value = "=") {
        if (operator = "+") {
            results = firstOperand + secondOperand
            console.log(results)
            
        } 
        
        //let result = firstOperand + secondOperand
        //calculate()
        //display.innerText = result
        //console.log(result)
    } 
})

//function calculate() {
    //let result = (operator == "+" ) ? firstOperand + secondOperand :
    //(operator == "-") ? firstOperand - secondOperand :
    //(operator == "x") ? firstOperand * secondOperand :
                //firstOperand / secondOperand;
    
//}