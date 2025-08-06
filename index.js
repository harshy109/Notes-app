const createBtn = document.querySelector(".create-btn");
const notesDiv = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");
//DO NO keep this as const as you need to change the content

let noOfNotes = 0;
const colors = [
    {
        bgColor : "#f1d4d4",
        fontColor : "black"
    },
    {
        bgColor : "#f1edd4",
        fontColor : "black"
    },
    {
        bgColor : "#d2ebd4",
        fontColor : "black"
    },
    {
        bgColor : "#b7c0ea",
        fontColor : "black"
    },
];

function showNotes(){
    notesDiv.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    
    localStorage.setItem("notes", notesDiv.innerHTML);

}

createBtn.addEventListener("click", function(){
    if(noOfNotes >= 6){
        alert("You can't add more notes!"); 
    }
    else{
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        inputBox.className = "input-box";
        let color = colors[Math.floor(Math.random()*colors.length)];
        inputBox.style.cssText = `background-color: ${color.bgColor}; color: ${color.fontColor};`;
        inputBox.setAttribute("contenteditable","true");
        img.src = "images/delete.png";
        notesDiv.appendChild(inputBox).appendChild(img);
        noOfNotes++;
    }
})

notesDiv.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        noOfNotes--;
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.addEventListener("keyup", updateStorage());
        });
    }
})
