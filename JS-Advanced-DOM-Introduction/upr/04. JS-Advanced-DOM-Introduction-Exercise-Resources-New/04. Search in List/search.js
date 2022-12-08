function search() {
   let list = Array.from(document.querySelectorAll("ul li"));
   let text = document.getElementById("searchText").value;
   let count = 0;
   for (let el of list) {
      let curText = el.textContent;
      if (curText.includes(text)) {
         el.style.textDecoration = "underline";
         el.style.fontWeight = "bold";
         count ++;
      }else {
         el.style.textDecoration = "none";
         el.style.fontWeight = "";
      }
   }
   document.getElementById("result").innerText = `${count} matches found`
}
