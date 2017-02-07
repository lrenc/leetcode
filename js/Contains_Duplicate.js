/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {};
    for (let n of nums) {
        if (map[n] === undefined) {
            map[n] = 1;
        } else if (map[n] === 1) {
            return true;
        }
    }
    return false;
};
