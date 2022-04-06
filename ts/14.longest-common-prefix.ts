/**
 * 思路：
 * 设最长公共子串为数组第一项
 * 依次遍历数组，每一项与当前最长公共子串比较，对比更新结果
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }
  let res = strs[0];
  for (let i = 1; i < strs.length; i ++) {
    let item = strs[i];
    let j = 0;
    for (; j < item.length; j ++) {
      if (res[j] !== item[j]) {
        break;
      }
    }
    res = res.slice(0, j);
    if (!res.length) {
      return '';
    }
  }
  return res;
};