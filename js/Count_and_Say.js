/**
 * @param {number} n
 * @return {string}
 */

var count = function(str) {
    var i = 0,
        l = str.length - 1;

    var n   = 1;
    var res = [];

    for (; i < l; i ++) {
        if (str[i+1] === str[i]) {
            n ++;
            continue;
        }
        res.push(n);
        res.push(str[i]);
        n = 1;
    }
    res.push(n);
    res.push(str[l]);

    return res.join('');
};

var countAndSay = function(n) {
    var res = '1';
    if (n === 1) {
        return res;
    }
    for (var i = 1; i < n; i ++) {
        res = count(res);
    }
    return res;
};