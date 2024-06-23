// chrome://extensions/

//Initialization step
myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const uListEl=document.getElementById("ulist-el")
const deleteBtn = document.getElementById("delete-btn")
const localStorageLeads=JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("tab-btn")


if (localStorageLeads) {
    myLeads = localStorageLeads
    render(myLeads)
}

const tabs= [
    {url:""}
]


function render(leads){
    let listItems=""
    for (let i = 0; i < leads.length; i++) {
   // listItems += `<li><a target='_blank' href='" + myLeads[i] +"'>"+myLeads[i] + "</a></li>`
   //Using Template String/Literals

   listItems += `
   <li>
       <a target='_blank' href='${leads[i]}'>
           ${leads[i]}
       </a>
   </li>
`
}

uListEl.innerHTML =listItems
}

//Listening for button clicks

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)     //Pushing the element in the array
    console.log(myLeads)            //Debug
    render()                   //Call render function to display
    inputEl.value=""                //Clear input field
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    })

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render()
})

<<<<<<< HEAD
tabBtn.addEventListener("click", function(){
    //Using chrome API to interact with the browser & get tab URLs
    chrome.tabs.query({active:true,currentWIndow:true}, function (tabs){

        let activeTab=tabs[0]
        let activeTabId=activeTab.activeTabId

    })

    myLeads.push(tabs[0].urls)
    localStorage.setItem("myLeads",JSON.stringify( myLeads ) )
    render(myLeads)
=======
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
>>>>>>> 657590450261357329436234c6e26e3de40b9f80
})