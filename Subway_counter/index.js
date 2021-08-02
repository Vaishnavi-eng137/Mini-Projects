let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function incrementCount(){
   // count =  count+1
   count += 1
   countEl.innerText = count
}
//innerText & textContent are similar usage.textContent is better solution 
function saveCount(){
   let countStr = count + " - "
   saveEl.textContent += countStr
   countEl.textContent = count
   count = 0
   
}

var firstName = "shalu"
var lastName = "kumari"

var fullName = firstName + " " + lastName
console.log(fullName)

let name = "shalu"
let greeting = "Hi there"

function greetShalu(){
   console.log(greeting + "," + name + "!")
}
greetShalu()

let myPoints = 3 

function add3Points(){
 myPoints += 3
}

function remove1Point(){
   myPoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)
let errorEl = document.getElementById("error")
function displayError(){
   errorEl.textContent = "something went wrong"
   alert("something went wrong")
}

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")
let sub = document.getElementById("sub-el")
let div = document.getElementById("div-el")
let mul = document.getElementById("mul-el")

function add(){
let result = num1+num2
sum.innerText = "Sum:" + result
}
function subtract(){
 let result = num1- num2
 sub.innerText = "Sub:" + result  
}
function divide(){
 let result = num1/num2
 div.innerText = "Div:" + result  
}
function multiply(){
   let result = num1*num2
   mul.innerText = "Mul:" + result
}