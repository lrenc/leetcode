function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;
  for (; i >= 0; i --) {
    digits[i] += 1;
    if (digits[i] < 10) {
      break;
    }
    digits[i] = 0;
  }
  if (i < 0) {
    digits.unshift(1);
  }
  return digits;
};