/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var l = num.toString(2).length;
    return num ^ (Math.pow(2, l) - 1);
};

console.log(findComplement(1));
