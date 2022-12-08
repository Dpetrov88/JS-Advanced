function printArr (arr, simbol) {
    let sum = ""
    for (let char = 0; char < arr.length; char++) {
        if (char == arr.length - 1) {
            sum += arr[char];
            break;
        }
        sum += arr[char] + simbol;
        
    }
    console.log(sum);
}
printArr(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);