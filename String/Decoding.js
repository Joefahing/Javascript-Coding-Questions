/**
 * @param {string}
 * @return {num}
 */

 var decoding = (string) => {

 }

 var helper = (string, index) => {

    let numWays = 0;

    if(string.length - index == 1 || string.length - index == 0){
        return 1
    }


    let combineValue = Number.parseInt(string.slice(index, index+2));

    if(combineValue <= 26){
        numWays = helper(string, index + 1) + helper(string, index + 2);

    }else{
        numWays = helper(string, index + 1);
    }

    return numWays;
 }

console.log(`Number of ways to decode 123 is: ${helper('12',0)}`);