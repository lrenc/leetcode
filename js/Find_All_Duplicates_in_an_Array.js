/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 1 ≤ a[i] ≤ n 对于有这样特性的数组，可以考虑负号标记法
var findDuplicates = function(nums) {
    var res = [];
    for (let i = 0, l = nums.length; i < l; i ++) {
        let n = Math.abs(nums[i]);
        if (nums[n - 1] < 0) {
            res.push(n);
        } else {
            nums[n - 1] *= -1;
        }
    }
    return res;
};

console.log(findDuplicates([1,2,1,3, 2]));
