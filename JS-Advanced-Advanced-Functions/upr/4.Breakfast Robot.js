function solution () {
    let store = {
    protein : 0,
    carbohydrate : 0,
    fat : 0,
    flavour : 0
    }

    let library = {
        apple: {carbohydrate :  1,flavour: 2},
        lemonade: {carbohydrate:10, flavour:20},
        burger :{carbohydrate:5,fat: 7, flavour:3},
        eggs: {protein:5,fat:1, flavour:1},
        turkey: {protein: 10,carbohydrate: 10,fat: 10, flavour: 10}
    }
    return function cmd (input) {
        let [comand,microelement, quantity] = input.split(" ");
        switch (comand) {
            case "restock":
                store[microelement] +=Number (quantity)
                return "Success"
            case "prepare":
                let isDone = true;
                let copyStore = JSON.parse(JSON.stringify(store));
                let str = ""
                for (let [k,v] of Object.entries(library[microelement])) {
                    let neededValue = Number(v) * Number(quantity);
                    if (store[k] < neededValue) {
                        isDone = false;
                        str = `Error: not enough ${k} in stock`
                        break;
                    }
                    copyStore[k] -= neededValue;
                }
                    if (!isDone) {
                        return str
                    }
                    store = copyStore;
                    return "Success"
                
            case "report":
                    return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
        }
    }
}
let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
