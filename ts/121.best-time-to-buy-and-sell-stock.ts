/**
 * 思路：
 * 一次循环，同时寻找买入和卖出时机
 */
function maxProfit(prices: number[]): number {
  let buyNum = Number.MAX_SAFE_INTEGER;
  let maxValue = 0;
  for (let i = 0; i < prices.length; i ++) {
    const currentPrice = prices[i];
    if (currentPrice < buyNum) {
      buyNum = currentPrice; // 当前是一个更低的买入价格
    } else if (currentPrice - buyNum > maxValue) { // 寻找卖出时机
      maxValue = currentPrice - buyNum;
    }
  }
  return maxValue;
};
