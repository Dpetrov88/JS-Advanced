class Rectangle {
    constructor (width, height, color) {
        this.width = width;
        this.heigth = height;
        this.color = color
    }
     calcArea()  {
        return this.width * this.heigth;
    }
}

let rec = new Rectangle (4,5,"blue");
console.log(rec);