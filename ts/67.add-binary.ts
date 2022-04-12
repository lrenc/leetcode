function addBinary(a: string, b: string): string {
  let lA = a.length - 1;
  let lB = b.length - 1;
  let flag = 0;
  let sum = '';
  while (lA >= 0 && lB >= 0) {
    const itemA = a[lA];
    const itemB = b[lB];
    let res = parseInt(itemA) + parseInt(itemB) + flag;
    if (res >= 2) {
      flag = 1;
      res -= 2;
    } else {
      flag = 0;
    }
    sum = `${res}${sum}`;
    lA --;
    lB --;
  }
  while (lA >= 0) {
    const itemA = a[lA];
    let res = parseInt(itemA) + flag;
    if (res >= 2) {
      flag = 1;
      res -= 2;
    } else {
      flag = 0;
    }
    sum = `${res}${sum}`;
    lA --;
  }
  while (lB >= 0) {
    const itemB = b[lB];
    let res = parseInt(itemB) + flag;
    if (res >= 2) {
      flag = 1;
      res -= 2;
    } else {
      flag = 0;
    }
    sum = `${res}${sum}`;
    lB --;
  }
  if (flag) {
    sum = `${flag}${sum}`
  }
  return sum;
};


console.log(addBinary('1', '111'))