
const display = document.getElementById('display'); 
const main = document.getElementById('main');  
let number = document.getElementsByClassName('number');  
const button = document.getElementById('operators');  
let Operator = document.getElementsByClassName('operator');  
let clearButton = document.getElementById('clearButton');  
let equals = document.getElementById('equals'); 
let results = 0;
let firstOperand = " ";
let secondOperand = " ";
let operator = ""; 
let memoryOne = "";
let memoryTwo = "";
let newMemory = ""; 

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
        debugger;
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
                if (parseFloat(firstOperand) % parseFloat(secondOperand) === 0) {
                    results = parseFloat(firstOperand) / parseFloat(secondOperand) 
                    display.innerText = results
               
                    firstOperand = results
                    secondOperand = " "
                } else {
                    results = parseFloat(firstOperand) / parseFloat(secondOperand)
                    display.innerText = results.toFixed(3)
               
                    firstOperand = results.toFixed(3)
                    secondOperand = " "                  
                }
            } else {
                display.innerText = firstOperand
            }  
        }
        operator = e.target.value 
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
    if (display.innerText.length >= 10) {
        display.innerText = "";
    }
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
        if (parseFloat(firstOperand) % parseFloat(secondOperand) === 0) {
            results = parseFloat(firstOperand) / parseFloat(secondOperand) 
            display.innerText = results; 
        } else {
            results = parseFloat(firstOperand) / parseFloat(secondOperand)
            display.innerText = results.toFixed(3);
        }
       
    } 
};



clear.addEventListener("click", function () {
    display.innerText = 0;
    if (!firstOperand == "" || !operator == "" || !secondOperand == "") {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        
    }
});

// things to be done memory function and the decimal point 
//M+ 
//M-
//MR 
//MC 




function addMemory() {
     
};



function memoryMinus() {
    
};

function memoryRecall() {
    
};


function memoryClear() {
    
};



















