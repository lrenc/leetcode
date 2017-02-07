/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var res = [];
    var tmp = 0;
    var i = num1.length - 1;
    var j = num2.length - 1;
    while (i >= 0 && j >= 0) {
        let n = +num1[i];
        let m = +num2[j];
        let c = n + m + tmp;
        if (c >= 10) {
            c = c % 10;
            tmp = 1;
        } else {
            tmp = 0;
        }
        console.log(c)
        res.push(c);
        i --;
        j --;
    }

    var num;
    var k;

    if (i < 0) {
        num = num2;
        k = j;
    } else {
        num = num1;
        k = i;
    }
    while (k >= 0) {
        let c = +num[k] + tmp;
        console.log(c);
        if (c >= 10) {
            c = c % 10;
            tmp = 1;
        } else {
            tmp = 0;
        }
        res.push(c);
        k --;
    }
    if (tmp !== 0) {
        res.push(tmp);
    }
    return res.reverse().join('');
};

console.log(addStrings('9', '99'));
// console.log(1999 + 99)
