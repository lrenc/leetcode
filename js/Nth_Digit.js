/**
 * @param {number} n
 * @return {number}
 */

var list = [];
for (let i = 1; i < 10; i ++) {
    list.push(9 * Math.pow(10, i - 1) * i);
}

var findNthDigit = function(n) {
    let m = n;
    let i = 0;
    let l = list.length;
    for (; i < l; i ++) {
        m = m - list[i];
        if (m < 0) {
            m = m + list[i];
            break;
        }
    }
    if (m === 0) {
        return 9;
    }
    let res;
    let num = Math.pow(10, i) + Math.floor(m / (i + 1));
    let rem = m % (i + 1);
    if (rem === 0) {
        num = String(num - 1);
        res = num[num.length - 1];
    } else {
        res = String(num)[rem - 1]
    }

    return parseInt(res);
    // let rem =
};

function test() {
    var str = '';
    for (i = 1; i < 100000; i ++) {
        str = str + i;
    }
    return str;
}

function main(n) {
    var str = test();
    console.log(str[n - 1]);
    console.log(findNthDigit(n));
}

main(10000)
