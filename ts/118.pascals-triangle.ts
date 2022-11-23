/**
 * 思路：正常的循环
 */
function generate(numRows: number): number[][] {
  const res = [[1], [1,1]];
  if (numRows <= 2) {
    return res.slice(0, numRows);
  }
  for(let i = 1; i < numRows - 1; i ++) {
    const prev = res[i];
    const curr = [1];
    for (let j = 0; j < prev.length  - 1; j ++) {
      curr.push(prev[j] + prev[j + 1]);
    }
    curr.push(1);
    res.push(curr);
  }
  return res;
};

console.log(generate(4));