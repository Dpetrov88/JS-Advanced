function storeCataloge (data) {
    let catalog = {};
    for ( let stock of data) {
        let [produckt, price] = stock.split(" : ");
        price = Number(price);
        catalog[produckt] = price;
    }
    let sorted =Object.keys(catalog).sort((a,b) => a.localeCompare(b));
    let newCatalog = {};
    for (let el of sorted) {
        if (catalog.hasOwnProperty(el)) {
            newCatalog[el] = catalog[el]
        }
    }
    let curChar = "";
    for (let [producktName, producktPrice] of Object.entries(newCatalog)) {
        let firstChar = producktName[0];
        if (firstChar !== curChar) {
            curChar = firstChar;
            console.log(firstChar);
        }
        console.log(`  ${producktName}: ${producktPrice}`);
    }
   
}
storeCataloge(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);