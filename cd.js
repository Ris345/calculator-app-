
const display = document.getElementById('display'); 
const main = document.getElementById('main');  
let number = document.getElementsByClassName('number');  
const button = document.getElementById('operators');  
let Operator = document.getElementsByClassName('operator');  
let clearButton = document.getElementById('clearButton');  
let equals = document.getElementById('equals'); 
let memoryRetrive = document.getElementById('memoryRetrive');
let memoryClear = document.getElementById('memoryClear'); 
let results = 0;
let continueResults = 0; 
let firstOperand = " ";
let secondOperand = " ";
let operator = ""; 
let memoryOne = "";
let memoryTwo = 0;
let addMemory = "";
let minusMemory = ""; 
let newMemory = ""; 



Array.from(number).forEach(num => {
    num.addEventListener('click', function (e) {
        if (operator == "") {
          if (display.innerText.length >= 10) return;
            if (firstOperand) {
                firstOperand = firstOperand + e.target.value
            } else {
                firstOperand = parseFloat(e.target.value)
            }
            display.innerText = firstOperand
           
           } else if (firstOperand && operator) {
              if (display.innerText.length >= 10) return;
                 if (secondOperand) {
                secondOperand = secondOperand + e.target.value
                } else {
                secondOperand = parseFloat(e.target.value)
            }
            display.innerText = secondOperand
        }
    });
});


Array.from(Operator).forEach(opr  => {
    opr.addEventListener('click', function (e) {
        debugger;
        if (display.innerText.length >= 10) {
            display.innerText = "";
        }
        if (operator == "+") {
            if (secondOperand) {
                continueResults = parseFloat(firstOperand) + parseFloat(secondOperand)
                display.innerText = continueResults
                firstOperand = continueResults
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }
        if (operator == "-") {
            if (secondOperand) {
                continueResults = parseFloat(firstOperand) - parseFloat(secondOperand)
                display.innerText = continueResults
               
                firstOperand = continueResults
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }
        if (operator == "*") {
            if (secondOperand) {
                continueResults = parseFloat(firstOperand) * parseFloat(secondOperand)
                display.innerText = continueResults
                firstOperand = continueResults
                secondOperand = " "
            } else {
                display.innerText = firstOperand
            }
        }        
        if (operator == "/") {
            if (secondOperand) {
                if (parseFloat(firstOperand) % parseFloat(secondOperand) === 0) {
                    continueResults = parseFloat(firstOperand) / parseFloat(secondOperand)
                    display.innerText = continueResults
               
                    firstOperand = continueResults
                    secondOperand = " "
                } else {
                    continueResults = parseFloat(firstOperand) / parseFloat(secondOperand)
                    display.innerText = continueResults.toFixed(3)
               
                    firstOperand = continueResults.toFixed(3)
                    secondOperand = " "
                }
            } else {
                display.innerText = firstOperand
            }
        }
        operator = e.target.value
    });
});

 
decimal.addEventListener("click", function () {
    if (button === decimal) {
        display.innerText = firstOperand + '.';
    }
     
});
equals.addEventListener("click", function () {
    calculate()
});


function calculate() {
    if (display.innerText.length >= 10) {
        display.innerText = "";
    }
    debugger; 
    if (operator == "+") {
        results = parseFloat(firstOperand) + parseFloat(secondOperand) 
        display.innerText = results; 
        debugger; 
        if (results) {
            firstOperand = "";
            secondOperand = "";
            operator =""; 
        }
      } else if (operator == "-") {
        results = parseFloat(firstOperand) - parseFloat(secondOperand)
        display.innerText = results
        if (results) {
            firstOperand = "";
            secondOperand = "";
            operator =""; 
        }
    } else if (operator == "*") {
        results = parseFloat(firstOperand) * parseFloat(secondOperand)
        display.innerText = results; 
        if (results) {
            firstOperand = "";
            secondOperand = "";
            operator =""; 
        }
    } else if (operator == "/") {
        if (parseFloat(firstOperand) % parseFloat(secondOperand) === 0) {
            results = parseFloat(firstOperand) / parseFloat(secondOperand) 
            display.innerText = results; 
            if (results) {
              firstOperand = "";
              secondOperand = "";
              operator =""; 
            }
        } else {
            results = parseFloat(firstOperand) / parseFloat(secondOperand)
            display.innerText = results.toFixed(3);
            if (results) {
               firstOperand = "";
               secondOperand = "";
               operator =""; 
            }
        }
       
    } 
};

clear.addEventListener("click", function () {
    display.innerText = 0;
    if (!firstOperand == "" || !operator == "" || !secondOperand == "") {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        memoryfnc.innerText = "No Memory"; 
        newMemory = ""; 
        addMemory = "";

    }
});


memoryPlus.addEventListener("click", function addMemo() {
    memoryOne = display.innerText;
    if (!newMemory || newMemory === 0) {
        let memoryTwo = 0;
        newMemory = parseFloat(memoryOne) + parseFloat(memoryTwo)
        memoryOne = newMemory
        memoryTwo = ""; 
        memoryfnc.innerText = newMemory
    } else if(newMemory) {
        addMemory = parseFloat(newMemory) + parseFloat(memoryOne);
        newMemory = addMemory
        memoryOne = ""; 
        memoryfnc.innerText = addMemory
    } else {
        memoryfnc.innerText = "No Memory"; 
    }
});



memoryMinus.addEventListener("click", function subtractMemory() {
    memoryOne = display.innerText;
    if (!newMemory || newMemory === 0) {
        let memoryTwo = 0; 
        newMemory = parseFloat(memoryTwo) - parseFloat(memoryOne);
        memoryOne = newMemory
        memoryTwo = ""; 
        memoryfnc.innerText = newMemory; 
    } else if(newMemory) {   
        addMemory = parseFloat(newMemory) - parseFloat(memoryOne);
        newMemory = addMemory
        memoryOne = "";
        memoryfnc.innerText = addMemory; 
    } else {
        memoryfnc.innerText = "No Memory"; 
    }
 });


memoryRetrive.addEventListener("click", function show() {
    if (!newMemory == "") {
        memoryfnc.innerText = newMemory
    }  else if ( !addMemory == "") {
        memoryfnc.innerText = addMemory
    } else {
        memoryfnc.innerText = "No Memory"; 
    }
    
 });

