/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    while (num > 1 && num % 4 === 0) {
        num = num / 4;
    }
    return num === 1;
};

console.log(isPowerOfFour(5))
