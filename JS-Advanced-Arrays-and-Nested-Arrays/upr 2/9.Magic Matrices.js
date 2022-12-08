function magicMatrix (arr) {
  
    for (let i = 0; i < arr.length - 1; i++) {
        let sumRowOne = arr[i].reduce((acc,el) => acc + el);
        let sumRowTwo = arr[i + 1].reduce((acc,el) => acc + el);
        let sumCowOne = 0;
        let sumCowTwo = 0;
        for (let cow = 0; cow < arr.length; cow++) {
            sumCowOne += arr[i][cow];
            sumCowTwo += arr[i + 1][cow];
        }
        if (sumRowOne !== sumRowTwo || sumCowOne !== sumCowTwo) {
            return false;
        }else {
            return true
        }
    }

}
console.log (magicMatrix([[4, 5, 6],
             [6, 5, 4],
             [5, 5, 5]]));