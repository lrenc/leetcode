/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var dfs = function(candidates, i, sum, target, list, res) {
    
    for (var l = candidates.length; i < l; i ++) {
        sum += candidates[i];
        list.push(candidates[i]);
        // console.log(sum, list);
        if (sum === target) {
            res.push(list.slice());
            break;
            //return;
        }
        if (sum > target) {
            return;
        }
        dfs(candidates, i, sum, target, list.slice(), res);
        // reset
        // console.log(candidates[i], sum, list)
        sum -= candidates[i];
        list.pop();
        //console.log(candidates[i], sum, list)
        // 什么时候创建一个新的list
    }

};
var combinationSum = function(candidates, target) {
    // dfs
    candidates.sort(function(a, b) {
        return a - b;
    });
    var res = [];
    dfs(candidates, 0, 0, target, [], res);
    return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
