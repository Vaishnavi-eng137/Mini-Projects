let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [ ]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let player = {
    name:"vaisu",
    chips:345
}
//(3<=3;true)(11<=11;true)
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    //for getting num betn 1 to 13,adding 1 to get value from 1 & not from 0
    let randomNum = Math.floor(Math.random()*13 + 1)
    if(randomNum > 10){
        return 10
    }else if(randomNum === 1){
        return 11
    }else {
        return randomNum
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i =0;i<cards.length;i++){
      cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum ;
    // cardEl.textContent = "Cards: " + cards[0] + " " + cards[1] ;
    if(sum <= 20){
        messageEl.textContent = "Do you want to draw a new card 😄"
    }else if(sum === 21){
        messageEl.textContent = "blackjack"
        hasBlackJack = true
    }else {
        messageEl.textContent = "you lost"
        isAlive = false
    }

}

function newCard (){
    if(isAlive === true && sum !== 21){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
   

}

let hasCompletedCourse = true
let givesCar = true

function generateNum(){
    if(hasCompletedCourse === false && givesCar === false){
        generateNum()
    }
}

let person ={
    name:"shalu",
    aged:19,
    country:"India"
}

function logData(){
    console.log(person.name +" "+ "is " + person.aged + "years old and lives in" + person.country )
}
logData()

let fruit = ["apple","apple","pear","pear"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")



function newApp(){
    for(let i = 0; i<fruit.length;i++){
    if(fruit[i]==="apple"){
    appleShelf.textContent += "apple"
   } else if(fruit[i]==="pear")
    orangeShelf.textContent += "orange"
}
}
newApp()
