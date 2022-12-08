function argument (...params) {
    let obj = {};
    for (let el of params) {
        let type = typeof(el);
        
        console.log(`${type}: ${el}`);
        if (!obj.hasOwnProperty(type)) {
           obj[type] = 0
        }
       obj[type] += 1;
    }
    let buf = ""
    for (let [k,v] of Object.entries(obj)) {
       buf += `${k} = ${v}\n` 
    }
    console.log(buf);
}
argument('cat', 42, function () { console.log('Hello world!'); })