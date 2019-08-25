const assert = require('chai').assert;
const bitInsert = require('../Bit_Manipulation/BitInsert').bitInsert;

describe("Bit Insert", ()=>{
    it('Should return 1101', ()=>{
        assert.equal(bitInsert('1111', '10', 1, 2),'1101');
    })
})