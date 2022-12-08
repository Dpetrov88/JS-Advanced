function city (name, population, treasure) {
    return {
        name,
        population,
        treasure,
        taxRate : 10,
        collectTaxes() {
            this.treasure += Math.floor (this.population * this.taxRate);
            

        },
        applyGrowth(percent) {
            this.population += Math.floor (this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasure -= Math.floor (this.taxRate * percent / 100);
        }
    }

}
console.log(city('Tortuga',
7000,
15000,
));




