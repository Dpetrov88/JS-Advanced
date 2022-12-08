function rotateArr (arr, num) {
    for (let i = 0; i < num; i++) {
        let last = arr.pop();
        let first = arr.unshift(last)
        
    }
    console.log(arr.join(" "));
}
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);