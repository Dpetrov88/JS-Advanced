function sameNum (num) {
    let numString = num.toString();
    let one = Number (numString[0])
    let rez = 0
    let isTrue = true
    for (let i = 0; i < numString.length; i++) {
       
        let two =Number (numString[i])
        rez += two
        if (one !== two) {
           isTrue = false;
        }
    }
    console.log(isTrue);
    console.log(rez);
}
sameNum(2222222);