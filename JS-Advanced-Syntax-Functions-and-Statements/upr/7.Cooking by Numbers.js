function cooking (num, ...comand) {
    num = Number(num);

    for (let i = 0; i < comand.length; i++) {
    switch (comand[i]) {
        case "chop": num/= 2;
        console.log(num);
             break;
        case "dice": num = Math.sqrt(num);
        console.log(num);
            break;
        case "spice": num += 1;
        console.log(num);
            break;
        case "bake" : num *= 3;
        console.log(num);
            break;
        case "fillet": num *= 0.8;
            console.log(num);
            break;
    }
}

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');