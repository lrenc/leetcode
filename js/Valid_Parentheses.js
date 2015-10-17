/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 一个简单的栈实现
    var i = 0,
        l = s.length;
    
    var stack = [];

    for (; i < l; i ++) {
        var c = s[i];
        // 如果是开括号，则入栈
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            var top = stack.pop();
            if (!top) {
                return false;
            }
            if (c === ')' && top !== '(') {
                return false;
            }
            if (c === ']' && top !== '[') {
                return false;
            }
            if (c === '}' && top !== '{') {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};
