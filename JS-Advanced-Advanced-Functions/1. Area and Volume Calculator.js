function calculator (area, vol, data) {
    data = JSON.parse(data);
     let res = [];
     for (let el of data) {
        let calArea = area.call(el);
        let calVol = vol.call(el);
         res.push({
            area: calArea,
            vol: calVol
        })
     }
     
     
     return res;
     
}
 
function area () {
    return Math.abs(this.x * this.y);
}

function vol () {
    return Math.abs(this.x * this.y * this.z);
}
 calculator (area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
    