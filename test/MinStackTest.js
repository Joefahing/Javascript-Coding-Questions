const assert = require('chai').assert;
const MinStack = require('../MinStack').MinStack;

let firstCase = new MinStack();
firstCase.push(1);
firstCase.push(3);

let secondCase = new MinStack();
secondCase.pushAll(5,3,1,6,8,3,5,0);

let thirdCase = new MinStack();


describe('Min Stack', ()=>{
    it('Should return 1', ()=>{
        assert.equal(firstCase.minVal(), 1);
    })
})

describe('Min Stack', ()=>{
    it('Should return 0', ()=>{
        assert.equal(secondCase.minVal(), 0);
    })
})

describe('Min Stack', ()=>{
    it('Should return null', ()=>{
        assert.equal(thirdCase.minVal(), null);
    })
})