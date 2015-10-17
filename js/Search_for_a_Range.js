/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    // 二分法
    var i = 0,
        l = nums.length;

    if (l === 0) {
        if (target === nums[0]) {
            return [0, 0];
        }
        return [-1,-1];
    }
    while (i < l) {
        // 找到中间数
        var m = 0|(i+l)/2;
        if (target === nums[m]) {
            // 往两边进行查找，是否还有相同的
            var s = m - 1;
            var e = m + 1;

            while (s >= 0) {
                if (nums[s] !== target) {
                    //s ++;
                    break;
                }
                s --;
            }
            while (e < l) {
                if (nums[e] !== target) {
                    //e --;
                    break;
                }
                e ++;
            }
            return [s + 1, e - 1];
        }
        if (target < nums[m]) {
            l = m;
        } else {
            i = m + 1;
        }   
    }
    return [-1, -1];
};