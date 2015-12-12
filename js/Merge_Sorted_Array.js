/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = 0;
    var j = 0;
    var k = 0;
    while (j < n && i < m) {
        if (nums1[i] >= nums2[j]) {
            // m ++ 很重要
            m ++;
            for (k = m - 1; k > i; k --) {
                nums1[k] = nums1[k - 1];
            }
            nums1[i] = nums2[j];
            // console.log(nums1)
            j ++;
        }
        i ++;
    }
    while (j < n) {
        nums1[i] = nums2[j];
        i ++;
        j ++;
    }
    console.log(nums1);
};

merge([1,2,3,0,0,0],3,[2,5,6],3);