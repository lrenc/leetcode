/**
 * 思路：
 * 最简单的动态规划
 * f(n) = f(n - 2) + f(n - 1)
 */
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }
  let [a, b, c] = [1, 2, 3];
  for (let i = 3; i < n; i ++) {
    [a, b, c] = [b, c, b + c];
  }
  return c;
};
