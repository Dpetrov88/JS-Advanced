function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let list = document.querySelectorAll("tr td"); //#customers td:nth-child(2)
    let found = false;
    for (let cell of list ) {
        if (cell.textContent === email) {
            cell.parentElement.remove();
            found = true;
        }
    }
    let result = document.getElementById("result");
    result.textContent = found ? "Delete." : "Not found."
   // document.getElementsByName("email")[0].value = ""
}