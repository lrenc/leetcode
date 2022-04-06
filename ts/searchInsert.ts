/**
 * 思路：
 * 遍历数组，依次匹配
 */
function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i ++) {
    if (target <= nums[i]) {
      return i;
    }
    if (target > nums[i] && i < nums.length - 1 && target < nums[i + 1]) {
      return i + 1;
    }
  }
  return nums.length;
};