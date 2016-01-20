/**
 * Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// start from 0
var getRow = function(rowIndex) {
    var res = [1];
    if (rowIndex === 0) {
        return res;
    }
    res.push(1);
    // do something others
    for (var i = 1; i <= rowIndex; i ++) {
        var level = [1];
        for (var j = 1; j < i; j ++) {
            level[j] = res[j - 1] + res[j];
        }
        level[j] = 1;
        res = level;
    }
    return res;
};

console.log(getRow(3));