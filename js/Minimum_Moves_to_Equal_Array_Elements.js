/**
 * @param {number[]} nums
 * @return {number}
 */

var minMoves = function(nums) {
    var count = 0;
    // 先找出最小数
    var min = nums[0];
    var i = 1;
    var l = nums.length;
    for (; i < l; i ++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    for (i = 0; i < l; i ++) {
        count += nums[i] - min;
    }
    return count;
};


var res = minMoves([2,4,6,7]);

console.log(res);
