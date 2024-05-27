
let count=0

let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

function increment(){
console.log("Incremented")
count+=1;
countEl.textContent=count
}


function save(){
saveEl.textContent+=+count+" - "
count=0
document.getElementById("count-el").textContent=count
}