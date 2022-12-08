function solve() {
   let addButon = document.getElementsByClassName("shopping-cart")[0];
   let result = document.getElementsByTagName("textarea")[0];
   let sum = 0;
   let listProduckt = [];
   let checkout = false
   addButon.addEventListener('click', function (event) {
      if (event.target.nodeName !== "BUTTON") {
         return;
      }
      if (checkout) {
         return;
      }
      let btn = event.target;
      if (Array.from(btn.classList).indexOf("add-product") >= 0) {
      let producktElement = event.target.parentElement.parentElement;
      let name = producktElement.querySelectorAll(".product-title")[0].textContent;
      let price = producktElement.querySelector(".product-line-price").textContent;
      result.textContent += `Added ${name} for ${price} to the cart.\n`;
      
      if (!listProduckt.includes(name)) {
         listProduckt.push(name);
      }
      sum += Number(price);
      } else if (Array.from(btn.classList).indexOf("checkout") >= 0) {
         let list = listProduckt.join(", ");
         result.textContent += `You bought ${list} for ${sum.toFixed(2)}.`
         checkout = true;
      }

   })

}