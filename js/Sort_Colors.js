/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 一次遍历
var swap = function(a, b, nums) {
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
};

var sortColors = function(nums) {
    var i     = 0;
    var start = 0; 
    var end   = nums.length - 1;

    while (i <= end) {
        var n = nums[i];
        if (n === 0) {
            if (i > start) {
                swap(i ,start, nums);
                start ++;
            } else {
                i ++;
            }
        } else if (n === 2) {
            if (i < end) {
                swap(i, end, nums);
                end --;
            } else {
                i ++;
            }
        } else {
            i ++;
        }
    }
    // console.log(nums);
};

sortColors([1,2,1,0]);

