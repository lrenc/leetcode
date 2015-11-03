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
        // 把当前的数放到res中
        curr.push(nums[i]);
        // 把当前数删除
        temp = nums.slice();
        temp.splice(i,1);
        dfs(temp, curr, res);
        curr.pop();
    }
};

var permute = function(nums) {
    var res = [];
    dfs(nums, [], res);
    return res;
};

