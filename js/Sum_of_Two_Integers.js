/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var getSum = function(a, b) {
    if (b === 0) {
        return a;
    }
    let sum = a ^ b;
    let carry = (a & b) << 1;
    return getSum(sum, carry);
};


console.log(getSum(1,2));
