/**
 * @param {number array} 
 * @return {number}
 */

 function RodCut(length, price){

    if(length === 0) return 0;

    let maxValue = -1;

    for(let index = 1; index <= length; index++){
        maxValue = Math.max(maxValue, price[index - 1] + RodCut(length - index, price));
        console.log(`Rod size: ${index} ${length - index}`);
    }

    return maxValue
 }

 let price = [1,5,8,9,10,17,17,20,24,30];
 let length = 5;

 console.log(`The best value for Rod length of ${length} is ${RodCut(length,price)}`);

