function solution(n) {
    let num = n

    return function add(m) {
        return num + m
    }
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));






