/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 二进制版的大数相加
    var l1 = a.length;
    var l2 = b.length;
    var res = [];
    var carry = 0;
    while (l1 && l2) {
        var m = +a[l1 - 1];
        var n = +b[l2 - 1];
        var sum = m + n + carry;
        res.push(sum % 2);
        carry = 0|(sum / 2);
        l1 --;
        l2 --;
    }

    if (l2) {
        a = b;
        l1 = l2;
    }
    while(l1) {
        var m = +a[l1 - 1];
        var sum = m + carry;
        res.push(sum % 2);
        carry = 0|(sum/2);
        l1 --;
    }
    if (carry) {
        res.push(carry);
    }
    return res.reverse().join('');
};

console.log(addBinary("11", "1"));