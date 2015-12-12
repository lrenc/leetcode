/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 障碍物不加
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var i = 0;
    var j = 0;

    var res = []; 
    for (i = 0; i < n; i ++) {
        res[i] = 0;
    }
    res[0] = 1;

    for (i = 0; i < m; i ++) {
        for (j = 0; j < n; j ++) {

            if (obstacleGrid[i][j] === 1) {
                // 当前路为0
                res[j] = 0;
            } else {
                if (j > 0) {
                    // res[j]相当于上一个，res[j-1]相当于前一个
                    res[j] += res[j - 1];
                }
            }
        }
    }
    return res[n - 1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));