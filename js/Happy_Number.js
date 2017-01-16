/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var num = n;
    var arr = [n];
    while (true) {
        var tmp = 0;
        while (num >= 1) {
            var i = num % 10;
            num = Math.trunc(num / 10);
            tmp += Math.pow(i,2);
        }
        if (tmp === 1) {
            return true;
        }
        // 循环了
        if (~arr.indexOf(tmp)) {
            return false;
        }
        arr.push(tmp);
        num = tmp;
    }
};

console.log(isHappy(2));
