const display = document.getElementById("display");
const main = document.getElementById("main");
const number = document.getElementsByClassName("number");
const button = document.getElementById("operators");
const Operator = document.getElementsByClassName("operator");
const clearButton = document.getElementById("clearButton");
const equals = document.getElementById("equals");
const memoryRetrive = document.getElementById("memoryRetrive");
const memoryClear = document.getElementById("memoryClear");
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



Array.from(number).forEach((num) => {
  num.addEventListener("click", function (e) {
    if (operator == "") {
      if (display.innerText.length >= 10) return;
      if (firstOperand) {
        firstOperand = firstOperand + e.target.value;
      } else {
        firstOperand = parseFloat(e.target.value);
      }
      display.innerText = firstOperand;
    } else if (firstOperand && operator) {
      if (display.innerText.length >= 10) return;
      if (secondOperand) {
        secondOperand = secondOperand + e.target.value;
      } else {
        secondOperand = parseFloat(e.target.value);
      }
      display.innerText = secondOperand;
    }
  });
});



Array.from(Operator).forEach((opr) => {
  opr.addEventListener("click", function (e) {
    if (display.innerText.length >= 10) {
      display.innerText = "";
    }
    if (operator == "+") {
      if (secondOperand) {
        results = add(firstOperand, secondOperand);
        display.innerText = results;
        firstOperand = results;
        secondOperand = " ";
      } else {
        display.innerText = firstOperand;
      }
    }
    if (operator == "-") {
      if (secondOperand) {
        results = sub(firstOperand, secondOperand);
        display.innerText = results;
        firstOperand = results;
        secondOperand = " ";
      } else {
        display.innerText = firstOperand;
      }
    }
    if (operator == "*") {
      if (secondOperand) {
        results = multiply(firstOperand, secondOperand);
        display.innerText = results;
        firstOperand = results;
        secondOperand = " ";
      } else {
        display.innerText = firstOperand;
      }
    }
    if (operator == "/") {
      if (secondOperand) {
        if (parseFloat(firstOperand) % parseFloat(secondOperand) === 0) {
          continueResults =
            parseFloat(firstOperand) / parseFloat(secondOperand);
          display.innerText = continueResults;
          firstOperand = continueResults;
          secondOperand = " ";
        } else {
          continueResults =
            parseFloat(firstOperand) / parseFloat(secondOperand);
          display.innerText = parseFloat(results.toFixed(3));
          firstOperand = parseFloat(results.toFixed(3));
          secondOperand = " ";
        }
      } else {
        display.innerText = firstOperand;
      }
    }
    operator = e.target.value;
  });
});

decimal.addEventListener("click", function () {
  if (decimal) {
    if (!firstOperand.toString().includes(".")) {
      firstOperand += ".";
    } else if (!secondOperand.toString().includes(".")) {
      secondOperand += ".";
    } else {
      display.innerText = firstOperand;
      display.innerText = secondOperand;
    }
  }
});

equals.addEventListener("click", function () {
  calculate();
});

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function sub(num1,num2) {
    return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1,num2) {
    return parseFloat(num1) * parseFloat(num2);
}

function divide(num1,num2) {
    return parseFloat(num1) / parseFloat(num2);
}

function calculate() {
  if (display.innerText.length >= 10) {
    display.innerText = "";
  }
  if (operator == "+") {
    results = add(firstOperand, secondOperand);
    display.innerText = results;
    if (results) resetState()
    
  } else if (operator == "-") {
    results = sub(firstOperand, secondOperand);
    display.innerText = results;
    if (results) resetState()
    
  } else if (operator == "*") {
    results = multiply(firstOperand, secondOperand);
    display.innerText = results;
    if (results) resetState()
    
  } else if (operator == "/") {
    if (parseFloat(firstOperand) % parseFloat(secondOperand) === 0) {
      results = divide(firstOperand, secondOperand);
      display.innerText = results;
      if (results) resetState()
    } else {
      results = divide(firstOperand, secondOperand);
      display.innerText = parseFloat(results.toFixed(3));
      if (results) resetState()
    }
  }
}

function resetState() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
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
    newMemory = parseFloat(memoryOne) + parseFloat(memoryTwo);
    memoryOne = newMemory;
    memoryTwo = "";
    memoryfnc.innerText = newMemory;
  } else if (newMemory) {
    addMemory = parseFloat(newMemory) + parseFloat(memoryOne);
    newMemory = addMemory;
    memoryOne = "";
    memoryfnc.innerText = addMemory;
  } else {
    memoryfnc.innerText = "No Memory";
  }
});

memoryMinus.addEventListener("click", function subtractMemory() {
  memoryOne = display.innerText;
  if (!newMemory || newMemory === 0) {
    let memoryTwo = 0;
    newMemory = parseFloat(memoryTwo) - parseFloat(memoryOne);
    memoryOne = newMemory;
    memoryTwo = "";
    memoryfnc.innerText = newMemory;
  } else if (newMemory) {
    addMemory = parseFloat(newMemory) - parseFloat(memoryOne);
    newMemory = addMemory;
    memoryOne = "";
    memoryfnc.innerText = addMemory;
  } else {
    memoryfnc.innerText = "No Memory";
  }
});

memoryRetrive.addEventListener("click", function show() {
  if (!newMemory == "") {
    memoryfnc.innerText = newMemory;
    display.innerText = newMemory;
  } else if (!addMemory == "") {
    memoryfnc.innerText = addMemory;
    display.innerText = addMemory;
  } else {
    memoryfnc.innerText = "No Memory";
  }
});
