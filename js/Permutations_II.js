/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var dfs = function(nums, curr, res) {
    if (!nums.length) {
        res.push(curr.slice());
        return;
    }
    var temp;
    for (var i = 0, l = nums.length; i < l; i ++) {
        // 如何去重
        curr.push(nums[i]);
        temp = nums.slice();
        // 把当前数删除
        temp.splice(i, 1);
        dfs(temp, curr, res);
        curr.pop();
        while (i < l - 1 && nums[i + 1] === nums[i]) {
            i ++;
        }
    }
}
var permuteUnique = function(nums) {
    
    nums.sort(function(a, b) {
        return a - b;
    });

    var res = [];
    dfs(nums, [], res);
    return res;
};

console.log(permuteUnique([2, 2, 2]));