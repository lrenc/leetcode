/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var res = 0;
    var z = x ^ y;
    while (z > 0) {
        if (1 & z) {
            res ++;
        }
        z = z >> 1;
    }
    return res;
};

console.log(hammingDistance(1, 4));
