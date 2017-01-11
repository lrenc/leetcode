/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {
    let map = {};
    for (let item of magazine) {
        if (map[item]) {
            map[item] ++;
        } else {
            map[item] = 1;
        }
    }
    for (let item of ransomNote) {
        if (!map[item]) {
            return false;
        }
        map[item] --;
    }
    return true;
};


console.log(canConstruct('aa', 'aab'));
