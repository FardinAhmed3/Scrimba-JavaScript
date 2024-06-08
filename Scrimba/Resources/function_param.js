//Truthy & Falsy values

let currentViewers=null
console.log(currentViewers)

if (currentViewers){
    console.log("People are watching")
} else{
    console.log("People are not watching")
}
currentViewers=["Jane","Maddison"]

console.log(currentViewers)

if (currentViewers){
    console.log("People are watching")
} else{
    console.log("People are not watching")
}

let trueOrFalse=Boolean("")
console.log(trueOrFalse)

trueOrFalse=Boolean("Hello")
console.log(trueOrFalse)


//Function parameter + template literals

function greetUser(greeting, name){
    console.log(`${greeting}, ${name}` )
}
greetUser("Hello","User")