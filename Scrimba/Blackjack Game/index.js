let firstCard=5
let secondCard=16

let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""


messageEl=document.getElementById("message-el")
sumEl=document.getElementById("sum-el")

function startGame(){
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
