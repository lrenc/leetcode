/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0;
    var j = 0;
    var l = nums.length;

    for (; i < l; i ++) {
        if (nums[i] === 0) {
            // j = i;

            if (j < i) {
                j = i;
            }
            while(j < l) {
                if (nums[j] !== 0) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
                j ++;
            }
        }
    }
};
var nums = [1, 0];
console.log(moveZeroes(nums));
