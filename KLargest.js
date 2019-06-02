/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    let length = nums.length
    let result = 0;
    
    if (length === 0){
        return -1;
    }
    
    for(let index = Math.floor(length/2 - 1); index >= 0; index--){
        heapify(nums, index, length);
    }
    
    for(let index = length - 1; index >= length - k; index--){

        result = nums[0];
        nums[0] = nums[index];
        nums[index] = result;
        
        heapify(nums, 0, index); 
    }
    
    
    return result;
};

let heapify = function (nums, index, length){
    
    let max = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    
    if(left < length && nums[left] > nums[max]) {
        max = left;
    }
    
    if(right < length && nums[right] > nums[max]){
        max = right;
    }
    
    if(max != index){
        let temp = nums[index];
        nums[index] = nums[max];
        nums[max] = temp;
        
        heapify(nums, max, length);
    }
}



