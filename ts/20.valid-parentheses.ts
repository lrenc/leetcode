/**
 * 思路：
 * 遍历字符串，当遇到开括号时，入栈
 * 当遇到闭括号时，取出栈顶字符，判断是否为对应的开括号，若不匹配返回false
 * 最后判断栈的长度是否为零
 */
function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i ++) {
    const item = s[i];
    if (item === '(' || item === '[' || item === '{') {
      stack.push(item);
      continue;
    }
    const top = stack.pop();
    if (item === ')' && top !== '(') {
      return false;
    }
    if (item === ']' && top !== '[') {
      return false;
    }
    if (item === '}' && top !== '{') {
      return false;
    }
  }
  return stack.length === 0;
};