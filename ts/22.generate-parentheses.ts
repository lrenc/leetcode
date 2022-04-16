/**
 * 思路：
 * 使用递归，当还有左括号时，加左括号
 * 当右括号数大于左括号数时，加右括号
 */
function generate(left: number, right: number, str: string, res: string[]): void {
  if (left === 0 && right === 0) {
    res.push(str);
    return;
  }
  if (left > 0) {
    generate(left - 1, right, `${str}(`, res);
  }
  if (right > left) {
    generate(left, right - 1, `${str})`, res);
  }
}

function generateParenthesis(n: number): string[] {
  const res: string[] = []
  generate(n, n, '', res);
  return res;
};

