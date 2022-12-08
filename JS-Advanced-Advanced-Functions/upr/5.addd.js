function input (x) {
    let num = 0;
        function add (y) {
            num += y;
            return add;
    } 
    add.toString = () => num;
    return add(x)
}
