function toggle() {

    let el = document.getElementsByClassName("button")[0]
  
    let extra = document.getElementById("extra")
  
    extra.style.display = extra.style.display == "none" ? "block" : "none"
  
    el.textContent= el.textContent == "Less" ? "More" : "Less"
  
  }