let firstCard=5
let secondCard=16

let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""


if(sum <21){
    message=("Do you want to draw a new card?")
} else if(sum === 21){
    message=("Blackjack!")
    hasBlackJack=true
} else {
    message=("You're out!")
    isAlive=false
}
let age=21

if(age<21){
    console.log("You can not enter the game!")
}else{
    console.log("Welcome")
}

console.log(hasBlackJack)
console.log(isAlive)
