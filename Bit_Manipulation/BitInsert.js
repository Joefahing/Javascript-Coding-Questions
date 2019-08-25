/**
 * Question
 * You are given two 32-bit numbers, N and M, and two bit positions, i and j.
 * Write a method to insert M into N such that M starts at bit j and ends at bit i. 
 * You can assume that the bits j through i have enough space to fit all of M.
 * 
 * @param {string} n
 * @param {string} m
 * @param {number} i
 * @param {number} j
 * @return {string}
 */

 const bitInsert = (N, M, i, j) => {
    const n = Number.parseInt(N, 2);
    let m = Number.parseInt(M, 2);
   
    const left = ~0<<(j+1);
    const right = (1<<i) - 1;
    const mask = left | right;
    m = m << i;
    return ((mask & n) | m).toString(2);
 }

module.exports = {
    bitInsert,
}