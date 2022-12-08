function heroInventory (data) {
    let hero = [];
    for (let heros of data) {
        let [name , level , items] = heros.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : []; 
       hero.push({name,level,items});
        
    }
    hero = JSON.stringify(hero);
    console.log(hero);
    
}
heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);