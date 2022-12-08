function solve() {
  let [generateBtn, buyBtn] = document.querySelectorAll("button");

  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy);

  function generate () {
    let items =JSON.parse (document.querySelector("#exercise > textarea:nth-child(2)").value);
    let tableBody = document.getElementsByTagName("tbody")[0];
    for (let item of items) {
      let newRow = document.createElement("tr");
      newRow.innerHTML = `<td><img src =${item.img}></td>
      <td><p>${item.name}</p></td>
      <td><p>${item.price}</p></td>
      <td><p>${item.decFactor}</p></td>
      <td><input type="checkbox"/></td>`
      tableBody.appendChild(newRow);
    }
    
  }

  function buy () {
    let textarea = document.querySelector("#exercise > textarea:nth-child(5)");
    let table =Array.from (document.querySelectorAll("tbody tr"));
    let arrName = [];
    let totalPrice = 0
    let arrDec = 0
    for (let el of table) {
      if (el.querySelector("input[type=checkbox]:checked")) {
        let names = el.querySelector("p").textContent;
        arrName.push(names);
        let price =Array.from (el.querySelectorAll("td p"));
        totalPrice += (Number (price[1].textContent))
        arrDec += (Number (price[2].textContent))
      }
    }
      arrDec /= Number (arrName.length)
    // arrName = arrName.join(", ");
    textarea.textContent = `Bought furniture: ${arrName.join(", ")}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${arrDec}`
  }
  
}