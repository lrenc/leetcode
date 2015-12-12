/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 注意题意 n * n

var rotate = function(matrix) {
    // 使用一个额外的空间
    var l1 = matrix.length;
    var l2 = matrix[0].length;
    var i  = 0;
    var j  = 0;

    var temp = [];

    for (i = 0; i < l1; i ++) {
        temp[i] = [];
        for (j = 0; j < l2; j ++) {
            // 画图找规律
            temp[i][j] = matrix[l2 - j - 1][i];
        }
    }
    // console.log(temp); 
    for (i = 0; i < l1; i ++) {
        for (j = 0; j < l2; j ++) {
            matrix[i][j] = temp[i][j];
        }
    }
};


// 方法二

// 想想如何不使用额外的空间

var rotate = function(matrix) {
    // 有的时候可能一次无法完成，可以考虑多次如何完成
    // 先上下翻转，再对折
    var l1 = matrix.length;
    var l2 = matrix[0].length;

    var i  = 0;
    var j  = 0;

    var mid = 0|(l1/2);
    // 上下翻转
    for (i = 0; i < mid; i ++) {
        for (j = 0; j < l2; j ++) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[l1 - 1 - i][j];
            matrix[l1 - 1 - i][j] = tmp;
        }
    }
    // 对折
    for (i = 0; i < l1; i ++) {
        // j = i 而不是0
        for (j = i; j < l2; j ++) {
            if (i !== j) {

                var tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }
    }
    // console.log(matrix);
}

var i = [[1,2,3],[4,5,6],[7,8,9]];

rotate(i);