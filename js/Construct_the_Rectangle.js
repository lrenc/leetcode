/**
 * @param {number} area
 * @return {number[]}
 */

var constructRectangle = function(area) {
    var l = 0;
    var w = 0;
    var n = Math.trunc(Math.sqrt(area));
    for (i = 1; i <= n; i ++) {
        if (area % i === 0) {
            w = i;
            l = area / i;
        }
    }
    return [l, w];
};
