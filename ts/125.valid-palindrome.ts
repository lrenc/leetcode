function isPalindrome(s: string): boolean {
  const str = s.replace(/[^0-9a-zA-Z]/g, '');
  console.log(str);
  for (let i = 0, j = str.length - 1; i < j; i ++, j --) {
    const a = str[i];
    const b = str[j];
    if (a.toLowerCase() !== b.toLowerCase()) {
      return false;
    }
  }
  return true;
};

const result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result);