const assert =  require('chai').assert;
const isPermutation = require('../CheckPermutation').CheckPermutation;

describe('Two String Permutation', ()=>{
    it('Two empty strings', ()=>{
        assert.equal(true, isPermutation('', ''), 'Return true');
    });

    it('Argument with different length', ()=>{
        assert.equal(false, isPermutation('cbea', 'adebad'), 'Return false');
    })
})

