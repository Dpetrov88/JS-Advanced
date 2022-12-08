function attachGradientEvents() {
    let gradient = document.getElementById("gradient");

    gradient.addEventListener("mousemove", function (event) {
        let position = event.offsetX;
        let width = event.target.offsetWidth;
        let rezult = Math.trunc(position / width * 100);
        document.getElementById("result").textContent = `${rezult}%`;
    })
    gradient.addEventListener("mouseout" , () => {
        document.getElementById("result").textContent = "";
    })
    
}