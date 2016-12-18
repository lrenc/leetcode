/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let maps = {};
    for (let i of s) {
        if (maps[i]) {
            maps[i] += 1;
        } else {
            maps[i] = 1;
        }
    }
    for (let i of t) {
        if (!maps[i]) {
            return i;
        }
        if (maps[i] !== 0) {
            maps[i] -= 1;
        }
    }
};
console.log(findTheDifference('abcd', 'abcde'));
