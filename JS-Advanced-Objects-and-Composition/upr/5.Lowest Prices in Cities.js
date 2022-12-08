function lowestPrices (data) {
    let rez = {};
    for (let type of data) {
        [town, produckt, price] = type.split(" | ");
        price = Number(price);
      if (rez.hasOwnProperty(produckt)) {
        let curentPrice = rez[produckt].price;
        if (curentPrice > price) {
            rez[produckt] = {town,price};
        }
      } else {
        rez[produckt] = {town,price};
    }
    
    }
    for (let [produckt, values] of Object.entries(rez)) {
        console.log(`${produckt} -> ${values.price} (${values.town})`);
     } 
}
lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);