function printEveryElement (arr, num) {
    let newNum = Number(num)
    let newArr = [];
    for ( let i = 0; i < arr.length; i += newNum) {
        newArr.push(arr[i]);
    }
    return newArr
}
printEveryElement(['dsa',
'asd', 
'test', 
'tset'], 
2);