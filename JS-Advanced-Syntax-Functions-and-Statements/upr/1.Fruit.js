function fruit (fruit, gram, price) {
    let kg = gram / 1000
    let cost = price * kg
    console.log(`I need $${cost.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)