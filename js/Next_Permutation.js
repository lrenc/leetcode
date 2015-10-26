/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 给一个数组的一个范围内做逆序
var reverse = function(nums, begin, end) {
    var temp;
    while (begin < end) {
        temp = nums[begin];
        nums[begin] = nums[end];
        nums[end] = temp;
        begin ++;
        end --;
    }
}

var nextPermutation = function(nums) {
    var i = 0,
        j = 0,
        l = nums.length;
    var temp;
    for (i = l - 2; i >= 0; i --) {
        if (nums[i] < nums[i + 1]) {
            for (j = l - 1; j > i; j --) {
                if (nums[j] > nums[i]) {
                    break;
                }
            }
            // 先交换i, l-1到i+1中第一个比nums[i]大的数, 然后逆序i+１, l-1
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            reverse(nums, i + 1, l - 1);
            return;
        }
    }
    nums.reverse();
};



