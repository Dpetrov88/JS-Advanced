function addItem() {
    let newItem = document.getElementById("newItemText").value;
    let list = document.getElementById("items");
    let li = document.createElement("li");
    li.textContent = newItem;
    list.appendChild(li);
    document.getElementById("newItemText").value = "";
    let deleteBut = document.createElement("a");
    deleteBut.setAttribute("href", "#");
    deleteBut.textContent = "[Delete]"; 
   
    deleteBut.addEventListener("click", function (event) {
        event.target.parentElement.remove();
    })
    li.appendChild(deleteBut); 
    
}