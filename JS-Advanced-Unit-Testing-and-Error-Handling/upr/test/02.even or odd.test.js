let {assert} = require("chai");
let {isOddOrEven} = require("../02.even or odd");

describe ("test isOddOrEven works functionally", () => {
    it ("should be undefined with not string value", () => {
        assert.equal(isOddOrEven(6),undefined)
    })

});

describe ("test isOddOrEven works correctly with correct value", () => {
    it ("should be even", () => {
        assert.equal(isOddOrEven("love"),"even")
    })
    it ("should be odd", () => {
        assert.equal(isOddOrEven("loved"),"odd")
    })
});