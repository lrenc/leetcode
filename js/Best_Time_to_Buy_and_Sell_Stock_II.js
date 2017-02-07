/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let sum = 0;
    for (let i = 1, l = prices.length; i < l; i ++) {
        let diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            sum += diff;
        }
    }
    return sum;
};
