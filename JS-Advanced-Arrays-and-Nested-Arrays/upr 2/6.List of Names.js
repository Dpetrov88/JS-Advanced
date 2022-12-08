function listOfNames (arr) {
    let name = arr.sort((a,b) => a.localeCompare(b))
        for (let i = 1; i <= name.length; i++) {
            console.log(`${i}.${name[i - 1]}`);
        } 
}
listOfNames(["John", "Bob", "Christina", "Ema"]);