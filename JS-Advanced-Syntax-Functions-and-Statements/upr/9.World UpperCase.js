function worlUpper (text) {
    let patern = /\w+/g;
    let matched = text.match(patern).join(", ").toUpperCase()
    console.log(matched);

}
worlUpper('Hi, how are you?');