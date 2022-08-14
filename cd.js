
const display = document.getElementById('display'); 
const main = document.getElementById('main');  
let number = document.getElementsByClassName('number');  
const button = document.getElementById('operators');  
const box = document.getElementById('box');  
let firstOpr = document.getElementById('firstOpr'); // 1st display
let secondOpr = document.getElementById('secondOpr'); // 2nd display 
let operate = document.getElementById('operate');
let Operator = document.getElementsByClassName('operator'); // operator 
let clearButton = document.getElementById('clearButton'); // . & = 
let equals = document.getElementById('equals'); // equals button 
let results = 0;
let firstOperand = " ";
let secondOperand = " ";
let operator = ""; 


Array.from(number).forEach(num => {
    num.addEventListener('click', function (e) {
        if (operator == "") { 
            if (display.innerText.length >= 10) return;
            if (firstOperand) {
                firstOperand += e.target.value            
            } else {
                firstOperand = parseFloat(e.target.value)                
             }
                
            display.innerText = firstOperand   
           
        } else if (firstOperand && operator) {  
            if (display.innerText.length >= 10) return;
            if (secondOperand) {
                secondOperand += e.target.value   
            } else {
                secondOperand = parseFloat(e.target.value)
            }
            display.innerText = secondOperand 
            
        }  
    })
});

Array.from(Operator).forEach(opr  => {
    opr.addEventListener('click', function (e) {
        if (display.innerText.length >= 10) {
            display.innerText = "";
            
        }
        if (operator == "+") {
            if (secondOperand) {
                results = parseFloat(firstOperand) + parseFloat(secondOperand)
                display.innerText = results
                
                firstOperand = results
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }
        if (operator == "-") {
            if (secondOperand) {
                results = parseFloat(firstOperand) - parseFloat(secondOperand)
                display.innerText = results
               
                firstOperand = results 
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }
        if (operator == "*") {
            if (secondOperand) {
                results = parseFloat(firstOperand) * parseFloat(secondOperand)
                display.innerText = results 
               
                firstOperand = results
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }
        if (operator == "/") {
            if (secondOperand) {
                results = parseFloat(firstOperand) / parseFloat(secondOperand)
                display.innerText = results
               
                firstOperand = results 
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }
        operator = e.target.value 
          operate.innerText = operator
    })
});

 
decimal.addEventListener("click", function () {
    if (button === decimal) {
        display.innerText = firstOperand + '.';
    }
     
})

 
equals.addEventListener("click", function () {
        calculate()         
})


function calculate() {
    if (operator == "+") {
        results = parseFloat(firstOperand) + parseFloat(secondOperand) 
        display.innerText = results
     

      } else if (operator == "-") {
        results = parseFloat(firstOperand) - parseFloat(secondOperand)
        display.innerText = results
     
    } else if (operator == "*") {
        results = parseFloat(firstOperand) * parseFloat(secondOperand)
        display.innerText = results
       

    } else if (operator == "/") {
        results = parseFloat(firstOperand) / parseFloat(secondOperand) 
        display.innerText = results.toFixed(3)  
       
    } 
}



clear.addEventListener("click", function () {
    display.innerText = 0;
    if (!firstOperand == "" || !operator == "" || !secondOperand == "") {
      firstOperand = "";
      operator = "";
      secondOperand = "";
        
    }
})





























