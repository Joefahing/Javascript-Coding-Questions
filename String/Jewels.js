/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

 /*
The trick I applied to show this problem involve using set to store the Jewels set which will be
used for quick lookup for Stone set to find if stone is gem at constant time.

The time complexity is O(n) from the for loop and the space complexity is O(1) because I only create a
set
 */
var numJewelsInStones = function(J, S) {
    
    let result = 0;
    let gemSet = new Set(J);
    
    if(J.length === 0 || S.length === 0){
        return 0
    }
        
    for(let i = 0; i < S.length; i++){
        if(gemSet.has(S[i])){
            result ++;
        }
    }
    
    return result;
};