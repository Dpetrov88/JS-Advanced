function calorie (arr) {
    let res = {};
    for (let i = 0; i < arr.length; i+=2) {
        res[arr[i]] =Number (arr[i + 1]);
    }
console.log(res);
}
calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);