/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        var numArr = String(num).split('');
        num = numArr.reduce(function(prev, curr) {
            return prev + (+curr);
        }, 0);
    }
    return num;
};