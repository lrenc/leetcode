/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (n of nums) {
        nums[Math.abs(n) - 1] = -Math.abs(nums[Math.abs(n) - 1]);
    }
    var res = [];
    nums.forEach(function(n, i) {
        if (n > 0) {
            res.push(i + 1);
        }
    });
    return res;
};

var res = findDisappearedNumbers([1,2,2,4,1]);
console.log(res);
