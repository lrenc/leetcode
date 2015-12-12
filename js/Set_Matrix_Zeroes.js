/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 充分理解题意，想出最合适的算法
    var i = 0;
    var j = 0;

    var l1 = matrix.length;
    var l2 = matrix[0].length;

    var firstColumn = false;
    var firstRow    = false;

    for (i = 0; i < l1; i ++) {
        if (matrix[i][0] === 0) {
            firstColumn = true;
            break;
        }
    }

    for (j = 0; j < l2; j ++) {
        if (matrix[0][j] === 0) {
            firstRow = true;
            break;
        }
    }

    for (i = 1; i < l1; i ++) {
        for (j = 1; j < l2; j ++) {
            var item = matrix[i][j];
            if (item === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (i = 1; i < l1; i ++) {
        var item = matrix[i][0];
        if (item === 0) {
            for (j = 1; j < l2; j ++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (j = 1; j < l2; j ++) {
        var item = matrix[0][j];
        if (item === 0) {
            for (i = 1; i < l1; i ++) {
                matrix[i][j] = 0;
            }
        }
    }
    // 对第一排和第一列进行处理
    if (firstColumn) {
        for (i = 0; i < l1; i ++) {
            matrix[i][0] = 0;
        }
    }
    if (firstRow) {
        for (j = 0; j < l2; j ++) {
            matrix[0][j] = 0;
        }
    }

};
