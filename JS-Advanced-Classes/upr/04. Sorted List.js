class List {
    constructor () {
        this.list = [];
        this.size = this.list.length;
    }
    add (element) {
        this.list.push(element);
        this.size++;
        return this.list.sort((a,b) => a - b);
    }
    remove (index) {
        if (this.list[index] !== undefined) {
            return this.list.splice(index,1)
        }
    }
    get (index) {
        if (this.list[index] !== undefined) {
            return this.list[index];
        }
        
    } 
    
}

let list = new List();
list.add(5);
console.log(list.get(0)); 
list.add(8);
list.add(7);

list.add(1)
list.remove(1);
console.log(list.get(1));
