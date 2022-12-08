function subtract() {
    let textFirst = Number(document.getElementById("firstNumber").value);
    let textSecund = Number(document.getElementById("secondNumber").value);
    let rezult = textFirst - textSecund;
    document.getElementById("result").innerText = rezult;
}


