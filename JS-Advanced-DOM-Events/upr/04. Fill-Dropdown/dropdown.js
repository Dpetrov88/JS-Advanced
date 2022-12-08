function addItem() {
   let text = document.getElementById("newItemText").value
   let value = document.getElementById("newItemValue").value
   let menu = document.getElementById("menu")

    let el = document.createElement("option");
    el.textContent = text;
    el.value = value;
    document.getElementById("newItemText").value = ""
    document.getElementById("newItemValue").value = ""
    menu.appendChild(el)

}