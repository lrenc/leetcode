/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    // 笔算乘法的方法
    var l1 = num1.length;
    var l2 = num2.length;

    var res = [];

    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            // i + j
            if (!res[i + j]) {
                res[i + j] = 0;
            }
            res[i + j] += (+num1[i]) * (+num2[j]);
        }
    }
    // console.log(res);
    // 对大于10的采用进位
    for (var i = res.length - 1; i > 0; i --) {
        var item = res[i];
        if (item >= 10) {
            // 取个位数留在当前为，另外两位放到下一位
            res[i] = item % 10;
            res[i - 1] += (0|(item / 10));
        }
    }
    return res.join('');
    // console.log(res);
};