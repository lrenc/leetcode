/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var l = nums.length;
    if (l === 1) {
        return nums[0];
    }
    nums.sort(function(a, b) {
        return a - b;
    });
    console.log(nums);
    for (var i = 2; i < l; i += 3) {
        if (nums[i] !== nums[i - 2]) {
            return nums[i - 2];
        }
    }
    return nums[l - 1];
};


console.log(singleNumber([0,1,0,1,0,1,99]));