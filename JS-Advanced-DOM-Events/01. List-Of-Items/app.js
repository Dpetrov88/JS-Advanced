function addItem() {
   let newItem = document.getElementById("newItemText");
   let itemValue = newItem.value;
   let newList = document.getElementById("items");
   let li = document.createElement("li");
    li.textContent = itemValue;
    newList.appendChild(li)
    newItem.value = ""
}