/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    // 遍历
    var res = 0;
    var l1  = grid.length;
    var l2  = grid[0].length;
    for (let i = 0; i < l1; i ++) {
        for (let j = 0; j < l2; j ++) {
            let node = grid[i][j];
            if (node === 1) {
                // 对其周围进行统计
                // top
                if (j === 0 || grid[i][j - 1] === 0) {
                    res ++;
                }
                // right
                if (i === l1 - 1 || grid[i + 1][j] === 0) {
                    res ++;
                }
                // bottom
                if (j === l2 - 1 || grid[i][j + 1] === 0) {
                    res ++;
                }
                // left
                if (i === 0 || grid[i - 1][j] === 0) {
                    res ++;
                }
            }
        }
    }
    return res;
};

var arr = [
    [0,1,0,0],
    [1,1,1,0],
    [0,1,0,0],
    [1,1,0,0]
];

console.log(islandPerimeter(arr));
