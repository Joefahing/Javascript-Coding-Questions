/**
 * @param {string, string}
 * @return {boolean}
 * 
 * Question 1.5 Cracking the Coding Interview
 * There are three types of edits that can be performed on string: insert a character,
 * remove a character, or replace a character. Given two strings, write a fucntion to 
 * check if they are one edit away.
 */

 const oneAway = (first, second) => {
     
 }

 function checkReplace(first, second){
     let changed = false;

     for(let i = 0; i < first.length; i++){
         if(first[i] !== second[i] && changed) return false;
         else changed = !changed;
     }
     return true;
 }

 function checkInsertRemove(first, second){
     let i = j = 0;

     for(; i < first.length; i++, j++){
         if(first[i] !== second[j] && i === j){
             j--;
         }
         else if(first[i] !== second[j] && i!==j){
             return false;
         }
     }

     return true;
 }
