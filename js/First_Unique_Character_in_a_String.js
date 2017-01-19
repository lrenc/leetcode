/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let map = {};
    // 存储次数，而不是位置
    for (let c of s) {
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c] ++;
        }
    }
    for (let i = 0, l = s.length; i < l; i ++) {
        let c = s[i];
        if (map[c] === 1) {
            return i;
        }
    }
    return -1;
}
