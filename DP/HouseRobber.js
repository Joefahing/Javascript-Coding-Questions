var rob = function(nums){
    
    const dp = (nums, index) => {
        if(index >= nums.length) return 0;

        let max = 0;
        for(let i = index + 2; i < nums.length; i++){
            max = Math.max(max, dp(nums, i));
        }
        return max + nums[index];
    }

    return Math.max(dp(nums, 0), dp(nums,1));
}

console.log(rob([2,7,9,10,1]))