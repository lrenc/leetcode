/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var flag = '';
    if (x < 0) {
        x = -x;
        flag = '-';
    }
    var res;
    x = String(x);
    res = x.split('').reverse().join('');
    res = parseInt(flag + res);
    if (res < -2147483648 || res > 2147483647) {
        return 0;
    }
    return res;
};

console.log(reverse(-123));
