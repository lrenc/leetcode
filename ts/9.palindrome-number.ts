/**
 * 思路：
 * 转换成字符数组，翻转合并，与原数字字符串比较
 */
function isPalindrome(x: number): boolean {
  return `${x}` === `${x}`.split('').reverse().join('');
}