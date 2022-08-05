// A user must be able to click any button and have it display on top (done)
//A user must be able to add two numbers by selecting number 
//function and another number
// A user must be able to subtract two numbers by selecting a number 
// and a function and then another number 
// A user should be able to multiply two numbers 
// A user should be able to divide two numbers 
// A user should be able to  display 10 digits 
// Display decimals to at least the thousandth (.001)
//Perform continious calculatuion with any number or any function 
// Pressing the CE button clears the display 
// number Buttons 

// Pullin the main \


const  display = document.getElementById('display')
const main = document.getElementById('main')
const numbers = document.getElementsByClassName('number')
const operators = document.getElementsByClassName('operator')
let operator = ""
let userInput = 0
let total = 0 
let clickCount = 0

main.addEventListener('click',function(e){
    clickCount += 1
    if(clickCount >= 1){
        display.innerText += e.target.value
    } 

let convert = parseInt(e.target.value)
//console.log(convert)

     let check = e.target.id
     //console.log(check)


 let button = document.getElementById('operators')

 button.addEventListener('click',function(o){
     
          
    })
    
 })
 





// I need to add two numbers by clicking 1 (which should show up 1 on the screen) and when the user clicks a + sign nothing should appear and the second number to be added should appear. 

