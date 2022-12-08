function sortinNumbers (arr) {
  let small = arr.slice();

    arr.sort((a,b) => a - b);
    let newArr = [];
    
    for (let i = 0; i < small.length; i++) {
        
        let first = arr.shift();
        let second = arr.pop();
        
        newArr.push(first);
        if (small.length == newArr.length) {
            break;
        }
        newArr.push(second);
        if (small.length <= newArr.length) {
            break;
        }
       
    }
    return newArr
}
console.log(sortinNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));