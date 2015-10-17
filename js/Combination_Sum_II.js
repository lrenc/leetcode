/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 你能想到这是一棵树吗
var dfs = function(candidates, i, sum, target, list, res) {
    for (var l = candidates.length; i < l; i ++) {
        var item = candidates[i];
        sum += item;
        list.push(item);
        if (sum === target) {
            // 如何去重
            res.push(list);
            break;
        }
        // 如果和已经超过target了
        if (sum > target) {
            break;
        }
        // 进入下一层
        dfs(candidates, i + 1, sum, target, list.slice(), res);
        sum -= item;
        list.pop();
        while ( i < l && candidates[i] === candidates[i + 1]) {
            i ++;
        }
    }
};

var combinationSum2 = function(candidates, target) {
    // 与I的思路一样
    var res = [];
    candidates.sort(function(a, b) {
        return a - b;
    });
    dfs(candidates, 0, 0, target, [], res);
    return res;
};

console.log(combinationSum2([2,3,1,1,4], 5));