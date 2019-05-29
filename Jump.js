/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    let memo = new Array(nums.length).fill(-1)
    memo[nums.length - 1] = 1;
    return canJumpFromPosition(0, nums, memo);
};

function canJumpFromPosition(position, nums, memo){
    
  
    if(memo[position] != -1){
        return memo[position] == 0 ? false : true;
    }
    
    let jumpSteps = Math.min(nums[position] + position, nums.length - 1);
    
    for(let index = position + 1; index <= jumpSteps; index++){

        if(canJumpFromPosition(index, nums, memo)){
            memo[position] = 1;
            return true;
        }
    }
    
    memo[position] = 0;
    return false;
}

