/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// solution with es6
var intersection = function(nums1, nums2) {
    return [...new Set([...nums1].filter(item => ~nums2.indexOf(item)))];
};
