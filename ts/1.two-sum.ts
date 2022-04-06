/**
 * 思路：
 * 复制数组，先排序，然后用两个指针分别指向数组的两端
 * 两数相加，如果小了则左端指针右移，如果大了则右端指针左移，直到和为target
 * 返回原数组中两数的索引
 */
function twoSum(nums: number[], target: number): number[] {
  const arr = [...nums];
  arr.sort(function(a, b) {
    return a - b;
  });
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [
        nums.indexOf(arr[left]),
        nums.lastIndexOf(arr[right])
      ];
    }
    if (sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return [];
}