/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    //  first sort
    g.sort(function(a, b) {
        return a - b;
    });

    s.sort(function(a, b) {
        return a - b;
    });

    var res = 0;
    let l1 = g.length;
    let l2 = s.length;
    let i = 0;
    let j = 0;
    while (i < l1 && j < l2) {
        if (g[i] <= s[j]) {
            i ++;
        }
        j ++;
    }
    return i;
};
