function previosday (year, month, day) {
    let previous = new Date(year,month - 1,day - 1);
    
   console.log(`${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`);

}
previosday(2016, 10, 1);