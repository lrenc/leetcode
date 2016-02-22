/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length) {
        return true;
    }

    var i = 0;
    var j = s.length - 1;
    var validPatten = /[a-zA-Z\d]/;
    var patten = /[A-Z]/;

    while (i < j) {
        while (!validPatten.test(s[i]) && i < j) {
            i ++;
        }
        while (!validPatten.test(s[j]) && i < j) {
            j --;
        }
        // 字符串不能直接修改
        var start = s[i];
        var end   = s[j];

        if (patten.test(s[i])) {
            start = start.toLowerCase();
        }
        if (patten.test(s[j])) {
            end = end.toLowerCase();
        }
        if (start != end) {
            return false;
        }
        i ++;
        j --;
    }
    return true;
};

console.log(isPalindrome("aA"));