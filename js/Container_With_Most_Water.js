/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 两重循环
    // time limit
    /*var l = height.length;
    var max = 0;
    for (var i = 0; i < l - 1; i ++) {
        for (var j = i + 1; j < l; j ++) {
            var area = (j - i) * Math.min(height[i], height[j]);
            if (area > max) {
                max = area;
            }
        }
    }
    return max;*/

    var i = 0,
        l = height.length - 1;

    var max = 0;
    // 从两边往中间
    while (i < l) {
        var h1 = height[i];
        var h2 = height[l];
        var area;
        if (h1 < h2) {
            area = (l - i) * h1;
            i ++;
        } else {
            area = (l - i) * h2;
            l --;
        }
        if (area > max) {
            max = area;
        }
    }
    return max;
};