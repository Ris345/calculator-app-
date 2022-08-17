
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
        display.innerText = results; 
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
    } else if (addMemory) {
        finaladdMemory = parseFloat(addMemory) + parseFloat(newminusMemory);
        addMemory = finaladdMemory; 
        console.log(finaladdMemory); 
        newminusMemory = ""
        memoryfnc.innerText = finaladdMemory; 
    } else {
        memoryfnc.innerText = "No Memory"; 
    }
});



memoryMinus.addEventListener("click", function subtractMemory() {
    memoryOne = display.innerText;
    debugger;
    if (!newMemory) {
        newMemory = parseFloat(memoryTwo) - parseFloat(memoryOne);
        memoryOne = newMemory
        memoryTwo = ""; 
        memoryfnc.innerText = newMemory; 
    } else if(newMemory) {   
        addMemory = parseFloat(newMemory) - parseFloat(memoryOne);
        newMemory = addMemory
        memoryOne = "";
        memoryfnc.innerText = addMemory; 
    } else if (addMemory) {
        finalminusMemory = parseFloat(newminusMemory) - parseFloat(addMemory); 
        newminusMemory = finalminusMemory; 
        console.log(finalminusMemory); 
        addMemory = ""; 
        memoryfnc.innerText = finalminusMem0ory; 
    } else {
        memoryfnc.innerText = "No Memory"; 
    }
 });




memoryRetrive.addEventListener("click", function show() {
    debugger; 
    if (newMemory && addMemory) {
        memoryfnc.innerText = newMemory
        memoryfnc.innerText = addMemory
    } else if(finaladdMemory && finalminusMemory) {
        memoryfnc.innerText = finaladdMemory
        memoryfnc.innerText = finalminusMemory
    } else {
        memoryfnc.innerText = "No Memory"; 
    }
    
 });


memoryClear.addEventListener("click", function clear() {
    debugger; 
    if (!newMemory == "" || !addMemory == "" || !minusMemory == "" || !newminusMemory == "") {
        newMemory = ""; 
        addMemory = "";
        minusMemory = "";
        newminusMemory = ''; 
        memoryfnc.innerText = "Memory Clear"; 
    }        
 });




//memoryPlus function whats expected? whats being seen ? 
// number adds after the number is selected. 
// number dos not subtract with M= memory button function 
// both minus and plus memory buttons work by themselves but when add or subtracted byeach other they have nan showing

// memory should be global beyween M+ and M-
// such that if there is a memory it should be shared when pressing either of the buttons; 




