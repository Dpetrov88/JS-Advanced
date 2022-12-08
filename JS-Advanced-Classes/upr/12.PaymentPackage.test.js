let {assert} = require("chai");
let {PaymentPackage} = require("./12.Payment Package");

describe ("test global", () => {
describe ("test it work with correct parameters", () => {
    let payment = new PaymentPackage("Koko",5);
    it ("should work correct", () => {
        assert.equal(payment.value,5)
    })
    it ("should work correct", () => {
        assert.equal(payment.name,"Koko")
    })
   
    
    it ("should work correct", () => {
        assert.equal(payment._value,5)
    })
})
describe ("test name", () => {
    it ("set incorrect type of name", () => {
        assert.throws(() => {new PaymentPackage(7,5)}, "Name must be a non-empty string")
    })
    it ("set name with no length ", () => {
        assert.throws(() => {new PaymentPackage("",5)}, "Name must be a non-empty string")
    })
})
describe ("test value", () => {
    it ("set incorrect type of value", () => {
        assert.throws(() => {new PaymentPackage("Koko","Petio")}, "Value must be a non-negative number")
    })
    it ("set negative value", () => {
        assert.throws(() => {new PaymentPackage("Koko",-8)}, "Value must be a non-negative number")
    })
})
describe ("test Vat", () => {
    let payment = new PaymentPackage("Koko",20);
    it ("set incorrect type of Vat", () => {
        assert.throws(() => {payment.VAT="pesho"}, "VAT must be a non-negative number")
    })
    it ("set negative value", () => {
        assert.throws(() => {payment.VAT=-20}, "VAT must be a non-negative number")
    })
    it ("work correct", () => {
        assert.equal(payment.VAT,20)
    })
})
describe ("test Active", () => {
    let payment = new PaymentPackage("Koko",20);
    it ("set incorrect type of Active", () => {
        assert.throws(() => {payment.active = "gol"}, 'Active status must be a boolean')
    })
    it ('Active work correct', () => {
        assert.equal(payment.active,true)
    })
})
describe ("to  string", () => {
    let payment;
    beforeEach(() => {
        payment = new PaymentPackage("koko",5);
    })
    it ("test active state", () => {
        const output = [
            `Package: koko`,
            `- Value (excl. VAT): 5`,
            `- Value (VAT 20%): ${5 * (1 + 20 / 100)}`
          ].join("\n")
          assert.equal(payment.toString(),output)
    })
    it ("test not active state", () => {
        const output = [
            `Package: koko (inactive)`,
            `- Value (excl. VAT): 5`,
            `- Value (VAT 20%): ${5 * (1 + 20 / 100)}`
          ].join("\n")
          payment.active = false
          assert.equal(payment.toString(),output)
    })
})
})
