/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return 1;
    }
    var res = [1,1];
    for (var i = 2; i <= n; i ++) {
        // 计算res[i]
        res[i] = 0;

        var a = 0,
            b = i - 1;
        while (b >= 0) {
            // console.log(i, res[i], res[a] * res[b])
            res[i] += (res[a] * res[b]);
            a ++;
            b --;
        }
    }
    return res[n];
};

console.log(numTrees(3));