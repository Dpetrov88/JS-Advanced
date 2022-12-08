function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll("button")[0];
    let decodeBtn = document.querySelectorAll("button")[1];

    encodeBtn.addEventListener("click", encode);
    decodeBtn.addEventListener("click", decode);

    function encode () {
        let text =document.querySelector("#main > div:nth-child(1) > textarea").value;
        let newCharCode = "";
        for (let i = 0; i < text.length; i++) {
            let ch = text[i].charCodeAt();
            newCharCode += String.fromCharCode(ch + 1);
        }
        let newText = document.querySelector("#main > div:nth-child(2) > textarea");
        newText.value = newCharCode;
        document.querySelector("#main > div:nth-child(1) > textarea").value = ""
    }

    function decode () {
        let texts = document.querySelector("#main > div:nth-child(2) > textarea").value;
        let newCh = "";
        for (let i = 0; i < texts.length; i++) {
            let curCh = texts[i].charCodeAt();
            newCh += String.fromCharCode(curCh - 1);
        }
        let newTexts = document.querySelector("#main > div:nth-child(1) > textarea");
        newTexts.value = newCh;
        document.querySelector("#main > div:nth-child(2) > textarea").value = ""
    }
}