function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change",onChange)

    function onChange (e) {
        let mailValue = e.target.value;
        let mailPatern = /[a-z0-9]+@[a-z0-9]+\.[a-z]+/gm;
        if (mailPatern.test(mailValue)) {
            e.target.classList.remove("error")
        }else {
            e.target.classList.add("error")
        }
    }
}