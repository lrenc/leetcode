/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    var l = nums.length;
    var mid = nums[Math.floor(l / 2)];
    var count = 0;
    for (let i = 0; i < l; i ++) {
        count += Math.abs(nums[i] - mid);
    }
    return count;
};

console.log(minMoves2([1,2,3]));
