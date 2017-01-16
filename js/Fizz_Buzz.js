/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];
    for (var i = 1; i <= n; i ++) {
        var a = i % 3;
        var b = i % 5;
        if (!a && !b) {
            res.push('FizzBuzz');
        } else if (!a) {
            res.push('Fizz');
        } else if (!b) {
            res.push('Buzz');
        } else {
            res.push(i.toString(10));
        }
    }
    return res;
};

console.log(fizzBuzz(15));
