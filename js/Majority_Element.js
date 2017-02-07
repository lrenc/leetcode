/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var candidate = null;
    var count = 0;
    for (let n of nums) {
        if (count === 0) {
            candidate = n;
            count = 1;
        } else if (n === candidate) {
            count ++;
        } else {
            count -= 1;
        }
    }
    return candidate;
};

console.log(majorityElement([1,2,3,4,5,2]));
