function notify(message) {
 let divContent = document.getElementById("notification");
 divContent.innerText = message;
 divContent.style.display = "block"
 divContent.addEventListener("click", showDisplay);
 function showDisplay(e) {
  e.target.style.display = "none"
 }
}