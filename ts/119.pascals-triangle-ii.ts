/**
 * 思路：
 * 正常的循环
 */
function getRow(rowIndex: number): number[] {
  if (rowIndex === 0) {
    return [1];
  }
  let row = [1, 1];
  if (rowIndex === 1) {
    row;
  }
  for (let i = 1; i < rowIndex; i ++) {
    let curr = [1];
    for (let j = 0; j < row.length - 1; j ++) {
      curr.push(row[j] + row[j + 1]);
    }
    curr.push(1);
    row = curr;
  }
  return row;
};
