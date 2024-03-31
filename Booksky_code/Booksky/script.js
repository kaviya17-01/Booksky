//selecting popup-box popup-overlay add-button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector(".add-button")

function update(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}

// addpopupbutton.addEventListener("click",function(){
//     popupoverlay.style.display="block"
//     popupbox.style.display="block"
// })

// select cancel button and stop the default submit
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
// adding new Book details --> 
//select container,add-book button,book-title-input,book-author-input,book-deccript-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescript=document.getElementById("book-descript-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container") //<div class="book-container">
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescript.value}</p>
    <button onclick="deletebook(event)">Delete</button>` //dont use double quotes
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}



