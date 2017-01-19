/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cur = 0;
    for (let i = 0, l = nums.length; i < l; i ++) {
        if (nums[i] === 1) {
            cur += 1;
        } else {
            cur = 0;
        }
        if (cur > max) {
            max = cur;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
