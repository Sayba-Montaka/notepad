let container = document.querySelector(".container");
console.log(container);
let button = document.querySelector('.btn');
let noteInput = document.querySelector(".input-box");


function showNotes(){
    container.innerHTML = localStorage.getItem("noteInput");

}
showNotes();


function updateStorage(){
    localStorage.setItem("noteInput",container.innerHTML);
}

button.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    let img = document.createElement("img");
    img.className = "dImg";
    img.src = "delete.png";
    container.appendChild(inputBox).appendChild(img);
});
container.addEventListener("click",(e)=>{
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName == "p"){
        noteInput = document.querySelectorAll(".input-box");
        noteInput.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
            
        });
    }
})
document.addEventListener("keydown",event => {
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})

