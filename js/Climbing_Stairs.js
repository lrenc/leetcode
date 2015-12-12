/**
 * @param {number} n
 * @return {number}
 */

// 斐波那契数列
var climbStairs = function(n) {
    if (n <= 3) {
        return n;
    }
    var a = 2;
    var b = 3;
    var c = 0;

    for (var i = 4; i <= n; i ++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

console.log(climbStairs(10));

// 1,2,3,5,8,13,21,34,55,89