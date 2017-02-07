/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var i = 0;
    var l = numbers.length - 1;

    while (i < l) {
        var from = numbers[i];
        var to   = numbers[l];
        var sum  = from + to;
        if (sum === target) {
            return [i + 1, l + 1];
        } else if (sum < target) {
            i ++;
        } else {
            l --;
        }
    }
};
