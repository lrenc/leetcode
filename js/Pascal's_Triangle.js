/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    if (numRows === 0) {
        return res;
    }
    var old = [1];

    res.push(old);
    if (numRows === 1) {
        return res;
    }
    for (var i = 1; i < numRows; i ++) {
        var level = [1];
        for (var j = 1; j < i; j ++) {
            // the first element is 1
            level[j] = old[j - 1] + old[j];
        }
        level[j] = 1;
        res.push(level);
        old = level;
    }
    return res;
};

console.log(generate(5));