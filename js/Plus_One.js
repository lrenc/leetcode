/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = 0,
        l = digits.length;

    // 从最后一位往前
    var item = digits[l - 1] + 1;
    digits[l - 1] = item % 10;

    var carry = 0|(item / 10);
    for (i = l - 2; i >= 0; i --) {
        item = digits[i] + carry;
        digits[i] = item % 10;
        carry = 0|(item / 10);
    }
    if (carry !== 0) {
        for (i = l - 1; i >= 0; i --) {
            digits[i + 1] = digits[i];
        }
        digits[0] = carry;
    }
    return digits;
};
console.log(plusOne([9]));