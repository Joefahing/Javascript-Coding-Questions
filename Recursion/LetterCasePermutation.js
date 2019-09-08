/**
 * @param {string} s
 * @return {[string]}
 * 
 * Question Leetcode 784. Letter Case Permutation
 * Given a string S, we cant ransform every letter individually to be lowercase or 
 * uppercase to create another string. Return a list of all possible strings we could 
 * create.
 * 
 * Use depth first search to create the combination one character at a time. Save
 * the result to the array if the length of s equal length of S
 */

var letterCasePermutation = (S) => {
    let result = [];

    const dfs = (s, index) => {
        if (s.length === S.length) {
            result.push(s);
            return;
        }

        const char = S.charAt(index);

        if(char >= '0' && char <= '9'){
            dfs(s + char, index + 1);
        }else{
            dfs(s + char.toUpperCase(), index + 1);
            dfs(s + char.toLowerCase(), index + 1);
        }
    }

    dfs('', 0);
    return result;
}

