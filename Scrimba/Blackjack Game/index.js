let firstCard=5
let secondCard=16

let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""


let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")


function startGame(){
    cardsEl.textContent="Cards: "+firstCard+" "+secondCard
    sumEl.textContent="Sum: "+sum


    if(sum <=20){
    message=("Do you want to draw a new card?")
    } else if(sum === 21){
    message=("Blackjack!")
    hasBlackJack=true
    } else {
    message=("You're out!")
    isAlive=false
    }

    messageEl.textContent=message

}

function newCard(){
    console.log("Drawing a new card from the deck!")

    let thirdCard=3
    sum+=thirdCard
    console.log(sum)

    startGame()
}