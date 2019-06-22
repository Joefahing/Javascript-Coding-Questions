/**
 * @param {string[]} words
 * @return {number}
 */

 /*
To find all the unique morse code generated from array of word. I used the strategy of turning each word into
morse code, and then inserting them into a set which will automatically filter out duplicated solutions.
The time complexity of this solution is O(n * m) where n is the number of words, and m is the length of each words,
the space complexity is O(1) because I only created a map and a set.
 */
var uniqueMorseRepresentations = function(words) {
    
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let morseCodeMap = new Map();
    let uniqueCode = new Set();
    
    for(let index = 97 ; index < 123; index++){
        morseCodeMap.set(String.fromCharCode(index), morseCode[index - 97]);
    }
    
    for(const word of words){
        let code = "";

        for(let index = 0; index < word.length; index++){
            code = code + morseCodeMap.get(word[index]);
        }
        
        uniqueCode.add(code);
    }
    
   return uniqueCode.size
};