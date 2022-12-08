function addRemove (arr) {
    let newarr  = [];
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "add") {
            newarr.push(sum)
            sum ++;
        }else if (arr[i] === "remove") {
            newarr.pop()
            sum ++;
        }
    }
    if (newarr.length == 0) {
        console.log("Empty");
    }else{
        console.log(newarr.join("\n"));
    }
}
addRemove(['add', 
'add', 
'remove', 
'add', 
'add']);