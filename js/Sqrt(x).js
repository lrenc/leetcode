/**
 * @param {number} x
 * @return {number}
 */

// int sqrt(int x)

var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    var a = 0;
    var b = x;

    while (a < b) {
        // 关于二分法的a,b取值
        var m = Math.ceil((a + b) / 2);
        var s = m * m;
        // console.log(a, b, m);
        if (s === x) {
            return m;
        }
        if (s < x) {
            a = m;
        } else {
            b = m - 1;
        }
    }
    return b;
};

console.log(mySqrt(6));