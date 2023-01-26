/**
 * 思路：
 * 26进制，由于没有0，需要先减一
 * 
 */
function convertToTitle(columnNumber: number): string {
  const res: string[] = [];
  while (columnNumber > 0) {
    columnNumber --;
    res.push(String.fromCharCode((columnNumber % 26) + 65));
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res.reverse().join('');
}

console.log(convertToTitle(2147483647));

