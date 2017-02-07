/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = {};
    for (let c of s) {
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c] ++;
        }
    }
    var res = 0;
    var flag = false;
    Object.keys(map).forEach(function(key) {
        if (map[key] % 2 === 0) {
            res += map[key];
        } else {
            flag = true;
            res += (map[key] - 1);
        }
    });

    if (flag) {
        res += 1;
    }
    return res;
};


console.log(longestPalindrome('abccccdd'));
