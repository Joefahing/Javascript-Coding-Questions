/**
 * @param {Number []} T
 * @return {Number []}
 * 
 * LeetCode 739 Daily Temperature
 * 
 * Given a list of daily temperatuers T, return a list such that, for each day  in
 * the input, tells you how many days you would have to wait until a warmer tempereature.
 * If there is no future day for which this is possible, put 0 instead
 * 
 * Pattern: Monotonic Stack
 * 
 * Time Complexity O(n)
 * Space Complexity O(n)
 */

var dailyTemperatures = function (T) {
    const monoStack = [];
    const result = [];

    for (let i = T.length - 1; i >= 0; i--) {
        while (monoStack.length > 0 && T[monoStack[monoStack.length - 1]] <= T[i]) {
            monoStack.pop();
        }
        const dailyRange =
            monoStack.length === 0 ? 0 : (monoStack[monoStack.length - 1] - i);

        result.push(dailyRange);
        monoStack.push(i);
    }

    return result.reverse();
}

console.log(dailyTemperatures([20,40,22,14,35]));