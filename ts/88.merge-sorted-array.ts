
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  while (i < m + j && j < n) {
    if (nums1[i] > nums2[j]) {
      for (let k = m + j - 1; k >= i; k --) {
        nums1[k + 1] = nums1[k];
      }
      nums1[i] = nums2[j];
      j ++;
    }
    i ++;
  }  
  
  if (j < n) {
    for (let k = 0; k < n - j; k ++) {
      if (nums1[m + j + k - 1] > nums2[j + k]) {
        nums1[m + j + k] = nums1[m + j + k - 1];
        nums1[m + j + k - 1] = nums2[j + k];
      } else {
        nums1[m + j + k] = nums2[j + k];
      }
    }
  }
  // console.log(nums1, nums1.length)
};

merge([1,5,8,0,0,0,0,0], 3, [-1,2,2,4,6], 5)
