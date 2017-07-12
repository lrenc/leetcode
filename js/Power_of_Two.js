/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n && n % 2 === 0) {
        n = n / 2;
    }
    return n === 1;
};
