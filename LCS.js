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
    
    let memo = [...Array(s1.length)].map(e => Array(s2.length).fill(null));
    return lcs(s1, s2 ,0 ,0, memo);
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

 let string1 = "abacefaaplqpe";
 let string2 = "acbefnbapejf";

 console.log(`The longest common substring is ${longesetCommonSubstring(string1, string2)}`)

 