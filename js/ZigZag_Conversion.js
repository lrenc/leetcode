/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    // 声明一个numRows长的数组，遍历s，依次进行添加
    var i = 0,
        l = s.length;


    var arr = [];
    // 初始化arr
    for (i = 0; i < numRows; i ++) {
        arr[i] = '';
    }

    var curr = 0;
    // 还需要一个变量来控制方向
    var dir  = 1;

    for (i = 0; i < l; i ++) {
        arr[curr] += s[i];
        curr += dir;
        if (curr === numRows) {
            curr -= 2;
            dir = -1;
        } else if (curr < 0) {
            curr += 2;
            dir = 1;
        }
    }
    return arr.join('');
};

console.log(convert("AB", 1))