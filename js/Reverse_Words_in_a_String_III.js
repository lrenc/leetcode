/**
 * @param {string} s
 * @return {string}
 */

function reverse(str) {
    return str.split('').reverse().join('');
}

var reverseWords = function(s) {
    var arr = s.split(' ');
    arr = arr.map(item => reverse(item));
    return arr.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))
