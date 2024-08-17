//Initialization step

let cards=[] 
let sum=0    
let hasBlackJack=false  
let isAlive=false
let message=""

//Click variable
let clicks = 0;

//Assigning elements
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

//Track # of Clicks
let clicksCountBtn = document.getElementById("clicksCountBtn");
let clicksEl = document.getElementById("clicksEl")

//Complex or Composite data type
//Creating the player object
let player= {
    name: "SR4",
    chips: 200
}

playerEl.textContent=player.name+" :"+player.chips

//Clicks event Listener
clicksCountBtn.addEventListener("click", displayClicksAmt);

//Function to track clicks
function displayClicksAmt() {
    clicksEl.innerText = clicks + " Clicks!";
}

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1

    if (randomNumber === 1){
    return 11
    } else if( randomNumber>10){
    return 10
    } else{
    return randomNumber
    }
}


function startGame(){
    clicks++;
    displayClicksAmt()
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}


function renderGame(){
    cardsEl.textContent="Cards: "
        for (let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+ " "
    }

    sumEl.textContent="Sum: "+sum


    if (sum <=20){
    message=("Do you want to draw a new card?")
    }
    else if (sum === 21){
    message=("Blackjack!")
    hasBlackJack=true
    } else {
    message=("You're out!")
    isAlive=false
    }
    messageEl.textContent=message
}

function newCard(){
    clicks++;
    displayClicksAmt()
    if(isAlive===true && hasBlackJack===false){
        console.log("Drawing a new card from the deck!")

        let thirdCard=getRandomCard()
        sum+=thirdCard
        cards.push(thirdCard)

        renderGame()
    } else{
        messageEl.textContent="Game Over! You cannot draw more cards"
    }
    
}