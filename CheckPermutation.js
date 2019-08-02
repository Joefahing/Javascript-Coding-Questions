/**
 * Given two strings, check if one is a permutation of the other
 * @param {String} first
 * @param {String} second
 * @return {Boolean}
 */


 function CheckPermutation(first, second){
     if(first.length !== second.length){
         return false;
     }

     const sortedFirst = first.split('').sort().join();
     const sortedSecond = second.split('').sort().join();

     return sortedFirst === sortedSecond;
 }

 console.log(CheckPermutation('abcebadfe', 'cba'));
