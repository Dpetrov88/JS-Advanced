function record(arr) {
  let  town = {};
  for (let name of arr) {
    let [city, population] = name.split(" <-> ");
    population = Number(population);
    if (town.hasOwnProperty(city) == false) {
        town[city] = population;
    }else {
     town[city] += population
  }}
  for (let towns in town) {
    console.log(`${towns} : ${town[towns]}`);
  }
  
}
record(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);