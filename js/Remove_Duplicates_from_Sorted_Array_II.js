/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var l = nums.length;
    if (l <= 2) {
        return l;
    }
    var res  = 1;
    var i    = 2;
    var temp = nums[1];
    for (; i < l; i ++) {
        if (nums[i] !== nums[i - 2]) {
            nums[res] = temp;
            res ++;
            temp = nums[i];
        }
    }
    nums[res] = temp;
    res ++;
    // console.log(nums, res);
    return res;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);

// res = 2

// 1, 1, 3, 1, 1, 3, 3
// 1,1,1,1,1,3,3


