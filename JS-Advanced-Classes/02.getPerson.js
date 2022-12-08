class Person {
    constructor (firstName, lastName,age,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email
    }
    
}
function foo () {
    const data = [
        ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel', 'Peterson', 24, 'g.p@gmail.com'],
    ]

    return data.map(x => new Person(...x))
}
