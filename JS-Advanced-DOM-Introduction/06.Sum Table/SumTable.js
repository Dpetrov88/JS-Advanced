function sumTable() {
    let row = Array.from(document.querySelectorAll("tr")).slice(1,-1);
    
    let rez = 0
    for (let el of row) {
        let num = Number(el.lastElementChild.textContent);
        rez += num;
    }
    document.getElementById("sum").textContent = rez
  // document.getElementById("sum").style.background = "blue" 
}