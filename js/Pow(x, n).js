/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var power = function(x, n) {
    if (n === 0) {
        return 1;
    }
    var half = power(x, 0|(n/2));
    console.log(n, half);

    if (n % 2 === 0) {
        return half * half;
    } else {

        return half * half * x;
    }
}

var myPow = function(x, n) {
    if (n < 0) {
        return 1 / power(x, -n);
    }
    return power(x, n);
};

console.log(myPow(2, 8))