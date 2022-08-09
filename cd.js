
let display = document.getElementById('display'); // main display
const main = document.getElementById('main'); // main div 
let number = document.getElementsByClassName('number'); // numbers 
//let  operators = document.getElementsByClassName('operator'); // 2nd div
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
        if (!operator) { // !operator previous logic 
            //firstOperand = parseFloat(e.target.value) 
            if (display.innerText.length >= 10) return;
            if (firstOperand) {
                firstOperand += e.target.value            
            } else {
                firstOperand = parseFloat(e.target.value)
                
             }
                
            //console.log(firstOperand)
            display.innerText = firstOperand
            
           
     } else {
            //secondOperand = parseFloat(e.target.value)
            //console.log(secondOperand)
            //display.innerText += parseFloat(e.target.value)
            
            if (secondOperand) {
                secondOperand += e.target.value   
            } else {
                secondOperand = parseFloat(e.target.value)
                
            }
            display.innerText = secondOperand 
            
        }
        
    })
});

// grabbing each operator with onClick.
Array.from(Operator).forEach(opr  => {
    opr.addEventListener('click', function (e) {
        operator = e.target.value // previous e.target.value
        console.log(operator)
    })
});

 

decimal.addEventListener("click", function () {
    if (button === decimal) {
        display.innerText = firstOperand + '.';
    }
       
})


// grabbing decimal and equals with onClick. 
equals.addEventListener("click", function () {
    console.log('firstOperand',firstOperand)
    console.log('secondOperand', secondOperand)
    console.log('operator', operator)
    console.log(equals.value)
    debugger;
    if (equals.value == "=") {
        debugger;
        if (operator == "+") {
            results = parseFloat(firstOperand) + parseFloat(secondOperand) 
            display.innerText = results 
            add()
            //console.log(results)
            //debugger;
          } else if (operator == "-") {
            results = parseFloat(firstOperand) - parseFloat(secondOperand)
            display.innerText = results
            subtract()
            //console.log(results)
        } else if (operator == "*") {
            results = parseFloat(firstOperand) * parseFloat(secondOperand)
            display.innerText = results
            multiply()
        } else {
            results = parseFloat(firstOperand) / parseFloat(secondOperand)
            display.innerText = (results).toFixed(3)
            divide()
        }
             
    }
           
})

function add() {
     parseFloat(firstOperand) + parseFloat(secondOperand)
     
}

function subtract() {
     parseFloat(firstOperand) - parseFloat(secondOperand)
     
}

function multiply() {
    parseFloat(firstOperand) * parseFloat(secondOperand)
}

function divide() {
    parseFloat(firstOperand) / parseFloat(secondOperand)
}


 





























// continious calculation 

// press one, 1 should show up 
// firstOperand = 1 
// secondOperand = 0 
// operator = ""
// press + , nothing should show up
 // firstOperand = 1
//  secondOperand = 0 
//  operator = "+" 
// press one , one should show up
// firstOperand = 1
// secondOperand = 1 
// operator = + 
// press + , nothing should show up 

// press one, 1 should show up 
// press + , nothing should show up 
// press one, 1 should show up 
// press equal 4 sould show up 

