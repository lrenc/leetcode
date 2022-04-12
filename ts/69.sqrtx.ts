/**
 * 思路：
 * 二分法
 * ps: 二分法需要再加强一下
 */
function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }

  let a = 0;
  let b = x;
  while (a < b) {
    const m = Math.ceil((a + b) / 2);
    const product = m * m;
    if (product === x) {
      return m;
    }
    if (product > x) {
      b = m - 1;
    } else {
      a = m;
    }
  }
  return b;
};

console.log(mySqrt(8))