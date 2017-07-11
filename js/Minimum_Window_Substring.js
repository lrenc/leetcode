/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) {
        return '';
    }
    var map = {};
    var min = s.length + 1;
    var res = '';

    for (let i = 0, l = t.length; i < l; i ++) {
        let c = t[i];
        if (map[c] === undefined) {
            map[c] = 1;
        } else {
            map[c] ++;
        }
    }
    var count = 0;
    var start = 0;
    for (let i = 0, l = s.length; i < l; i ++) {
        let c = s[i];
        if (map[c] !== undefined) {
            map[c] --;
            if (map[c] >= 0) {
                count ++;
            }
            // 找到一个符合的子串了
            while (count === t.length) {
                if (i - start + 1 < min) {
                    min = i - start + 1;
                    res = s.slice(start, i + 1);
                }
                if (map[s[start]] !== undefined) {
                    map[s[start]] ++;
                    if (map[s[start]] > 0) {
                        count --;
                    }
                }
                start ++;
            }
        }
    }
    return res;
};

var s = "ADOBECODEBANC";
var t = "ABC";

console.log(minWindow(s, t));
