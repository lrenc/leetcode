/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    let count = 0;
    while (n >= 1) {
        if (n % 2) {
            count ++;
        }
        n = (n/2)|0;
    }
    return count;
};
