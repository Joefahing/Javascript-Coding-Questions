/**
 * @param {number[]} nums
 * @return {number}
 *
 * Notes: Uses a set to reduce look up complexity to O(1) instead of O(n) with loops
 * The time complexity with this approach is O(n) generally because the first for loop will take 
 * O(n) and the inner while loop will only execute if there is a new sequence and it will stop
 * executing right after the sequence discontinues. Hence for a sequence like [1, 4, 7, 9] it will
 * only execute O(2n) times;
 */
var longestConsecutive = function(nums) {
    
    
    let set = new Set(nums);
    let longestStreak = 0;
    
    for(let num of nums){
        
        if(!set.has(num-1)){
            
            let current = num;
            let currentStreak = 1;
            
            while(set.has(current + 1)){
                current ++;
                currentStreak ++;
            }
            
            longestStreak = Math.max(currentStreak, longestStreak);
        }
    }
    
    return longestStreak;
};