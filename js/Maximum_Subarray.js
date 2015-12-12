/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = nums[0];
    var max = nums[0];

    var i = 1,
        l = nums.length;

    for (; i < l; i ++) {
        if (sum < 0) {
            sum = 0;
        }
        sum += nums[i];
        
        if (sum > max) {
            max = sum;
        }
    }    
    return max;
};

console.log(maxSubArray([-2, -1]));