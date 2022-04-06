/**
 * 思路：
 * 令最大子数组和为数组第一项
 * 遍历数组如果和大于最大值，则更新
 * 如果和小于0，则重置和
 */
function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i ++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

