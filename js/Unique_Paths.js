/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// time limit
var path = function(x, y, m, n, res) {
    // 如果右边有路，则往右
    if (x === m && y === n) {
        // 走到终点了
        res.count ++;
        return;
    }
    if (x < m) {
        path(x+1, y, m, n, res);
    }
    if (y < n) {
        path(x, y+1, m, n, res);
    }
}
/*var uniquePaths = function(m, n) {
    var res = {
        count: 0
    }
    path(1, 1, m, n, res);
    return res.count;
};
*/
var uniquePaths = function(m, n) {
    /*动态规划*/
    var arr = new Array(m);
    for (var i = 0; i < m; i ++) {
        arr[i] = new Array(n);
    }
    var i = 0;
    var j = 0;
    for (i = 0; i < m; i ++) {
        arr[i][0] = 1;
    }

    for(j = 0; j < n; j ++) {
        arr[0][j] = 1;
    }

    for (i = 1; i < m; i ++) {
        for (j = 1; j < n; j ++) {
            arr[i][j] = arr[i][j - 1] + arr[i - 1][j];
        }
    }
    return arr[m - 1][n - 1];
};

console.log(uniquePaths(20,3));