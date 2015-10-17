/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var l = nums.length;
    if (l < 2) {
        return l;
    }

    var res = 1,
        i   = 1;
    // 注意i从1开始
    for (; i < l; i ++) {
        if (nums[i] === nums[i-1]) {
            continue;
        }
        nums[res++] = nums[i];
    }
    // res始终指向不重复数字的下一个
    return res;
};