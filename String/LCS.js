/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 * The time complexity without dynamic programming is O(2^M+N) where M is length of s1
 * and N is the length of s2 because the recursive function will go through all the possible solutions
 * With dynamic programming the complexity is is not O(M+N) because it will only go through all
 * the possible answer once
 */

 var longesetCommonSubstring = function(s1, s2){
    
    //let memo = [...Array(s1.length)].map(e => Array(s2.length).fill(null));
    //return lcs(s1, s2 ,0 ,0, memo);
    return lcsBottomUp(s1, s2);
 }

 function lcs(s1, s2, position1, position2, memo){
     
    if(s1.length == position1 || s2.length == position2){
        return "";
    }

    if(memo[position1][position2] != null){
        return memo[position1][position2];
    }

    if(s1[position1] == s2[position2]){
        memo[position1][position2] = s1[position1] + lcs(s1, s2, position1 + 1, position2 + 1, memo);
        return memo[position1][position2];
    }

    let lcs1 = lcs(s1, s2, position1, position2 + 1, memo);
    let lcs2 = lcs(s1, s2, position1 + 1, position2, memo);

    memo[position1][position2] = lcs1.length > lcs2.length ? lcs1 : lcs2;
    return memo[position1][position2];
    
 }

 function lcsBottomUp(s1, s2){
     
    let memo = [...Array(s1.length + 1)].map(e => Array(s2.length + 1).fill(""));

    for(let i = s1.length - 1; i >= 0; i--){
            for(let j = s2.length - 1; j >= 0; j--){
                
                if(s1[i] == s2[j]){
                    memo[i][j] = s1[i] + memo[i+1][j+1];
                }
                else{
                    let result1 = memo[i][j+1];
                    let result2 = memo[i+1][j];

                    memo[i][j] = result1.length > result2.length ? result1 : result2;
                }
            }
        }

    return memo[0][0];
 }

 let string1 = "abacefaaplqpe";
 let string2 = "acbefnbapejpe";

 console.log(`Longest Common substring is ${longesetCommonSubstring(string1, string2)}`)

 