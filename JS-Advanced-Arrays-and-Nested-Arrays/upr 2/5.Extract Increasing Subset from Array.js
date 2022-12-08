function extrackt (arr) {
    let newArr = [];
    let a = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i]) {
            a = arr[i]
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join(" "));
    return newArr
    
}
 extrackt ([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );