/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim();
    if (s === '') {
        return 0;
    }
    let arr = s.split(' ');
    let res = 0;
    arr.forEach(item => {
        if (item.trim() !== '') {
            res ++;
        }
    });
    return res;
};
