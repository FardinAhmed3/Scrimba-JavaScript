//Initialization step
myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const uListEl=document.getElementById("ulist-el")

//Listening for button clicks
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)     //Pushing the element in the array
    console.log(myLeads)            //Debug
    renderLeads()                   //Call render function to display
    inputEl.value=""                //Clear input field
    })

function renderLeads(){
    let listItems=""
for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li><a href='#'>" + myLeads[i] + "</a></li>"
}
uListEl.innerHTML =listItems
}