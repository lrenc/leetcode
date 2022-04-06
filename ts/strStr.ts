/**
 * 思路：
 * 两层遍历，暴力解法
 * 另一种算法是KMP，这里不做介绍
 */
function strStr(haystack: string, needle: string): number {
  if (!needle) {
    return 0;
  }
  for (let i = 0; i < haystack.length; i ++) {
    let j = 0;
    for (; j < needle.length; j ++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};
