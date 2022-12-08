let {assert} = require("chai");
let {lookupChar} = require("../3.Char Lookup");

describe ("test lookupChar works with incorrect type ", () => {
    it ("should be undefined if first parameter is not a string", () => {
        assert.equal(lookupChar([],5),undefined)
    })
    it ("should be undefined if second parameter in not a number",() => {
        assert.equal(lookupChar("kkk","kk"), undefined)
    })
    it ("should be undefined if second parameter is decimal",() => {
        assert.equal(lookupChar("kkk",5.5), undefined)
    })
});

describe ("test lookupChar works with correct type and incorrect index", () => {
    it ("should be incorrect with bigger index", () => {
        assert.equal(lookupChar("kkk",10),"Incorrect index")
    })
    it ("should be incorrect with negative index", () => {
        assert.equal(lookupChar("kkk",-10),"Incorrect index")
    })
    it ("should be incorrect with same index and string.length", () => {
        assert.equal(lookupChar("kkk",3),"Incorrect index")
    })
});

describe ("test lookupChar works correctly", () => {
    it ("should be l with zero index",() => {
        assert.equal(lookupChar("love",0),"l")
    })
    it ("should be e with zero index",() => {
        assert.equal(lookupChar("love",3),"e")
    })
})