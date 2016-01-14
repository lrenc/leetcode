/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var dfs = function(n, k, curr, arr, res) {
    if (arr.length === k) {
        res.push(arr.slice());
        return;
    }
    // 递归表达式
    for (var i = curr; i <= n; i ++) {
        arr.push(i);
        dfs(n, k, i + 1, arr, res);
        // 递归返回之后执行的操作
        arr.pop();
    }
}

var combine = function(n, k) {
    // 递归
    var res = [];
    dfs(n, k, 1, [], res);
    return res;
};

console.log(combine(4,2))