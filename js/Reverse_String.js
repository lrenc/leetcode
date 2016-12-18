/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let res = [];
    let l = s.length;
    for (let i = l - 1, j = 0; i >= 0; i--, j ++) {
        res[j] = s[i];
    }
    return res.join('');
};
