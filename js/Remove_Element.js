/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    var i = 0,
        l = nums.length;

    var res = 0;
    // 注意这个arr并没有被排序
    for (; i < l; i ++) {
        // 不等覆盖，而非相等覆盖
        if (nums[i] === val) {
            //res --;
            continue;
        }
        nums[res ++] = nums[i];
    }
    return res;
};