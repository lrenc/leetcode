/**
 * @param {number} n
 * @return {string[]}
 */

// left  表示左括号的个数
// right 表示右括号的个数
var generate = function(left, right, str, res) {
    if (left === 0 && right === 0) {
        res.push(str);
        return;
    }
    // 如果左括号的个数大于0，可以
    if (left > 0) {
        generate(left - 1, right, str + '(', res);
    }
    // 右括号的个数大于左括号的个数
    if (right > 0 && right > left) {
        generate(left, right - 1, str + ')', res)
    }

}
var generateParenthesis = function(n) {
    var res = [];
    generate(n, n, '', res);
    return res;
};

console.log(generateParenthesis(3));
