// chrome://extensions/

//Initialization step
myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const uListEl=document.getElementById("ulist-el")
const deleteBtn = document.getElementById("delete-btn")
const localStorageLeads=JSON.parse(localStorage.getItem("myLeads"))

if (localStorageLeads) {
    myLeads = localStorageLeads
    renderLeads()
}

//Listening for button clicks
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)     //Pushing the element in the array
    console.log(myLeads)            //Debug
    renderLeads()                   //Call render function to display
    inputEl.value=""                //Clear input field
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    })

function renderLeads(){
    let listItems=""
    for (let i = 0; i < myLeads.length; i++) {
   // listItems += `<li><a target='_blank' href='" + myLeads[i] +"'>"+myLeads[i] + "</a></li>`
   //Using Template String/Literals

   listItems += `
   <li>
       <a target='_blank' href='${myLeads[i]}'>
           ${myLeads[i]}
       </a>
   </li>
`
}

uListEl.innerHTML =listItems
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})