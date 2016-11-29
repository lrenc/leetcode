/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [];
    for (let i = 0; i <= num; i ++) {
        let count = 0;
        let binaryNum = i.toString(2);
        for (let j = 0, n = binaryNum.length; j < n; j ++) {
            if (binaryNum[j] === '1') {
                count ++;
            }
        }
        res.push(count);
    }
    return res;
};
