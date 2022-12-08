let {assert} = require("chai");
let {sum} = require("./04.sum of numbers");

describe ("sum work functionally", () => {
    it ("shound be number", () => {
        assert.equal(sum([1,2]),3)
    })
    it ("shound be Nan", () => {
        assert.isNaN(sum([NaN,5]), NaN)
    })
})