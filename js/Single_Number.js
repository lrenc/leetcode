/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 先排序，然后两个两个匹配
 */
var singleNumber = function(nums) {
    var l = nums.length;
    if (l === 1) {
        return nums[0];
    }
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 1; i < l; i += 2) {
        if (nums[i] != nums[i - 1]) {
            return nums[i - 1];
        }
    }
    return nums[l - 1];
};

var res = singleNumber([0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7]);
console.log(res);