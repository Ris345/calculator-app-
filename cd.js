
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
let firstOperand = " ";
let secondOperand = " ";
let operator = ""; 
let memoryOne = "";
let memoryTwo = 0;
let addMemory = "";
let finaladdMemory = "";  
let minusMemory = ""; 
let newMemory = ""; 
let newminusMemory = ""; 
let finalminusMemory = ""; 




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
    });
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
        memoryfnc.innerText = "M"; 
    }
});



memoryPlus.addEventListener("click", function addMemo() {
    memoryOne = display.innerText;
    debugger; 
    if (!newMemory) {
        newMemory = parseFloat(memoryOne) + parseFloat(memoryTwo)
        memoryOne = newMemory
        memoryTwo = ""; 
        memoryfnc.innerText = newMemory
    } else if(newMemory) {
        addMemory = parseFloat(newMemory) + parseFloat(memoryOne);
        newMemory = addMemory
        memoryOne = ""; 
        console.log(addMemory);
        memoryfnc.innerText = addMemory
    } 
});



memoryMinus.addEventListener("click", function subtractMemory() {
    memoryOne = display.innerText;
    debugger;
    // if the button is clicked then this button would subtract the number that was given to it.  
    // so it would be 0  - memoryOne.
    // else if the 0 was full then it would subtract from the memoryOne.
    //  else if now the memory full condition should be also from the add memory or the M- memor which is the minusMemory
    // if the M- button is clicked then 
    if (!minusMemory) {
        minusMemory = parseFloat(memoryTwo) - parseFloat(memoryOne);
        memoryOne = minusMemory
        memoryTwo = ""; 
        memoryfnc.innerText = minusMemory; 
    } else {   
        newminusMemory = parseFloat(minusMemory) - parseFloat(memoryOne);
        minusMemory = newminusMemory
        memoryOne = "";
        memoryfnc.innerText = newminusMemory; 
    } 
 });




memoryRetrive.addEventListener("click", function show() {
    memoryfnc.innerText = minusMemory; 
    if (newMemory && addMemory) {
        memoryfnc.innerText = newMemory
        memoryfnc.innerText = addMemory
    } else {
        memoryfnc.innerText = minusMemory;
        memoryfnc.innerText = newminusMemory;
    }
    
 });


memoryClear.addEventListener("click", function clear() {
        addMemory.innerText = ""; 
        minusMemory.innerText = ""; 
        memoryfnc.innerText = "M"; 
 });






 




