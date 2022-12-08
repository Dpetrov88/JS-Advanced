function carFactory(data) {
    let rez = {};
    rez.model = data.model;
    if (data.power <= 90) {
        rez.engine = {
            power: 90,
            volume: 1800
        }
    } else if (data.power <= 120) {
        rez.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        rez.engine = {
            power: 200,
            volume: 3500
        }
    }
    if (data.carriage === "hatchback") {
        rez.carriage = {
            type: "hatchback",
            color: data.color
        }
    } else {
        rez.carriage = {
            type: "coupe",
            color: data.color
        }
    }
    let size = data.wheelsize;
   size % 2 === 0 ? size = data.wheelsize - 1 : size
    rez.wheels = [size,size,size,size];
    return rez
}
console.table(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));