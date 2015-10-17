/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 判断一个字符串是否是另一个字符串的子串
var strStr = function(haystack, needle) {

    var i = 0,
        j = 0,
        t = 0;

    var l1 = haystack.length;
    var l2 = needle.length;
    if (l2 === 0) {
        return 0;
    }

    while (i < l1 && j < l2) {
        var c1 = haystack[i];
        var c2 = needle[j];
        
        if (c1 === c2) {
            i ++;
            j ++;
        } else {
            // i又回去了
            t = t + 1;
            i = t;
            j = 0;
        }
        if (j === l2) {
            return t;
        }
    }
    return -1;
};

console.log(strStr('abcdef', 'adbc'));