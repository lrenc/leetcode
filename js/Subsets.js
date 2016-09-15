/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    var i = 0;
    var l = nums.length;
    // 2^l次
    var max = 1<<l;

    var res = [];
    // 用二进制表示从0到max的所有数，并将1所在的索引插入数组

    // 1001
    for (; i < max; i ++) {
        var item = [];
        var idx = 0;
        var j = i;
        while (j > 0) {
            if (j&1) {
                item.push(nums[idx]);
            }
            idx ++;
            j = j >> 1;
        }
        res.push(item);
    }
    return res;
}

var res = subsets([1,2,3]);

console.log(res);
