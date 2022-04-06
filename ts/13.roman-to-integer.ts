/**
 * 思路：
 * 直接遍历字符串，对每种情况进行判断
 */
function romanToInt(s: string): number {
  let res = 0;
  let l = s.length;
  for (let i = 0; i < s.length; i ++) {
    const item = s[i];
    if (item === 'M') {
      res += 1000;
    } else if (item === 'D') {
      res += 500;
    } else if (item === 'L') {
      res += 50;
    } else if (item === 'V') {
      res += 5;
    } else if (item === 'I') {
      if (i < l - 1 && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
        res -= 1;
      } else {
        res += 1;
      }
    } else if (item === 'X') {
      if (i < l - 1&& (s[i + 1] === 'L' || s[i + 1] === 'C')) {
        res -= 10;
      } else {
        res += 10;
      }
    } else if (item === 'C') {
      if (i < l - 1&& (s[i + 1] === 'D' || s[i + 1] === 'M')) {
        res -= 100;
      } else {
        res += 100;
      }
    }
  }
  return res;
}

const res = romanToInt('IX')
console.log(res)