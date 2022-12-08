function solve() {
  let text = document.getElementById("text").value;
  let textContend = document.getElementById("naming-convention").value;
  let rez = "";
  let splitText = text.split(" ");
  switch (textContend) {
    case "Camel Case":
      splitText.forEach((el, i) => {
        if (i === 0) {
          return rez += el.toLowerCase();
        }
        return rez += el[0].toUpperCase() + el.substring(1).toLowerCase();  
      });
      break;
    case "Pascal Case":
      splitText.forEach((el,i) => {
        let first = el.toLowerCase();
        rez += first[0].toUpperCase() + first.substring(1);
      })
    break;
    default: rez = "Error!"
    
  }
document.getElementById("result").textContent= rez
}
