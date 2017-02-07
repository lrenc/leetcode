/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var map = {};
    for (let c of s) {
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c] ++;
        }
    }

    for (let c of t) {
        if (!map[c]) {
            return false;
        }
        map[c] --;
    }
    return true;
};
