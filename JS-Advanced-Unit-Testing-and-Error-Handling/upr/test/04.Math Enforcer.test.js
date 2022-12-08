let {assert} = require("chai");
let {mathEnforcer} = require("../4.Math Enforcer");

describe ("test addFive work correct", () => {
    it ("should be undefined with not a number parametar", () => {
        assert.equal(mathEnforcer.addFive("koko"), undefined)
    })
    it ("should work correct with negative number", () => {
        assert.equal(mathEnforcer.addFive(-5),0)
    })
    it ("should work correct with float number", () => {
        assert.equal(mathEnforcer.addFive(5.5),10.5)
    })
   
    it ("should be undefined with not a number parametar", () => {
        assert.equal(mathEnforcer.subtractTen("koko"), undefined);
    })

    it ("should work correct with float number", () => {
        assert.equal(mathEnforcer.subtractTen(20.5),10.5)
    })
    it ("should work correct with negative number", () => {
        assert.equal(mathEnforcer.subtractTen(-15),-25)
    })


    it ("should be undefined if first parameter is not a number", () => {
        assert.equal(mathEnforcer.sum("kok",5),undefined)
    })
    it ("should be undefined if second parameter is not a number", () => {
        assert.equal(mathEnforcer.sum(4,"koko"),undefined)
    })
    it('sum should return correct data with float number', () => {
        assert.equal(mathEnforcer.sum(3.4, 4.8), 8.2);
    });
});