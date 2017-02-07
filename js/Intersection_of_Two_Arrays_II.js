/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    var map = {};

    for (let n of nums1) {
        if (map[n] === undefined) {
            map[n] = 1;
        } else {
            map[n] ++;
        }
    }
    for (let n of nums2) {
        if (map[n]) {
            res.push(n);
            map[n] --;
        }
    }
    return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
