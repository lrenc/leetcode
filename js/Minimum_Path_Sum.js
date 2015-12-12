/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    // 创建一个m*n的数组，用于存储到当前位置的最小值
    var i, j;
    var res = new Array(m);
    for (i = 0; i < m; i ++) {
        res[i] = new Array(n);
    }
    res[0][0] = grid[0][0];
    for (i = 1; i < m; i ++) {
        res[i][0] = res[i-1][0] + grid[i][0];
    }
    for (j = 1; j < n; j ++) {
        res[0][j] = res[0][j-1] + grid[0][j];
    }
    for (i = 1; i < m; i ++) {
        for (j = 1; j < n; j ++) {
            res[i][j] = grid[i][j] + Math.min(res[i-1][j], res[i][j-1]);
        }
    }
    // console.log(res);
    return res[m-1][n-1];
};

console.log(minPathSum([[1,2,5],[3,2,1]]));

// 1,3,1
// 1,5,1
// 4,2,1
