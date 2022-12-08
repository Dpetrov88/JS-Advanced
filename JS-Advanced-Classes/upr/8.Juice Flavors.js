function juice (input) {
let obj = {};
let newobj = {}
for (let el of input) {
    let curJuice = el.split(" => ");
    let fruit = curJuice[0];
    let quanity =Number (curJuice[1])
    if (!obj.hasOwnProperty(fruit)) {
        obj[fruit] = quanity
    }else {
      obj[fruit] += quanity
    }
    
    if (obj[fruit] >= 1000  ) {
       newobj[fruit]= obj[fruit]
    }
}
for (let el of Object.entries(newobj) ) {
    let value = el[1]
    let res = (value - (value % 1000)) / 1000;
    console.log(`${el[0]} => ${res}`);
}
}

juice(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);