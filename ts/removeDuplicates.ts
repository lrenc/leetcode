function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }
  let res = 1;
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] !== nums[i - 1]) {
      nums[res] = nums[i];
      res ++;
    }
  }
  // console.log(nums)
  return res;
};

console.log(removeDuplicates([]))
