/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n === 1) {
        return 0;
    }
    let res = 0;
    outer:
    for (let i = 2; i < n; i ++) {
        let l = Math.floor(Math.sqrt(i));
        for (let j = 2; j <= l; j ++) {
            if (i % j === 0) {
                continue outer;
            }
        }

        res ++;
    }
    return res;
};
// 我见青山多妩媚，料青山见我应如是
// 2,3,5,7
console.log(countPrimes(10));
