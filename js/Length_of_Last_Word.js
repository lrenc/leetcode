/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	s = s.replace(/ *$/, '');
    var arr = s.split(' ');
    return arr[arr.length - 1].length;
};